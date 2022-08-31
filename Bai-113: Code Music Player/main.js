const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

 /**
* 1. Render songs
* 2. Sroll top
* 3. Play / pause / seek
* 4. CD rotate
* 5. Next / Prev
* 6. Random
* 7. Next / Repeat When ended
* 8. Active song
* 9. Scroll active song into view
* 10. Play song when click
*/

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn =$('.btn-repeat')
const playList = $('.playlist')

const app ={
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))||{},
    songs: [
        {
            name: 'Em Ơi Đừng Khóc',
            singer: 'ThaiHoang',
            path: './assets/music/emoi.mp4',
            image: './assets/img/thaihoang1.jpeg'
        },
        {
            name: 'Cố Độc Vương',
            singer: 'Trieumuzik',
            path: './assets/music/muzik.mp4',
            image: './assets/img/muzik.1.jpeg'
        },
        {
            name: 'Vẫn nhớ',
            singer: 'Tilo',
            path: './assets/music/ppp.mp4',
            image: './assets/img/tilo.1.jpeg'
        },
        {
            name: 'Pháo Hồng',
            singer: 'Tirik',
            path: './assets/music/ppp.mp4',
            image: './assets/img/tilo2.jpeg'
        },
        {
            name: 'EDM remix',
            singer: 'trangmon',
            path: './assets/music/ppp.mp4',
            image: './assets/img/uu.png'
        },
        {
            name: 'Bình minh ơi ',
            singer: 'Juka',
            path: './assets/music/ppp.mp4',
            image: './assets/img/yy.jpeg'
        },
        {
            name: 'Mạnh mẽ tứ phương',
            singer: 'Bach xa',
            path: './assets/music/ppp.mp4',
            image: './assets/img/thienchi.jpeg'
        },  {
            name: 'Yếu đối trước gương',
            singer: 'thien chi',
            path: './assets/music/ppp.mp4',
            image: './assets/img/bb.jpeg'
        }
          
    ],
    setConfig: function(key, value){
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function(){
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}"data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                    </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('')
    },
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong',{
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function(){
        const cdWidth = cd.offsetWidth
        const _this = this
         // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity   
        })
        cdThumbAnimate.pause()
        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function(){
            const scrollTop = window.scrollY
            const newcdWidht = cdWidth - scrollTop

            cd.style.width = newcdWidht > 0?newcdWidht + 'px':0
            cd.style.opacity = newcdWidht / cdWidth
        }
        // Xử lý khi click play
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause()
            }else{
                audio.play()
            }
        }
        // Khi song được play
        audio.onplay = function(){
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        // Khi song bị pause
        audio.onpause = function(){
            _this.isPlaying = false
            player.classList.remove('playing')
             cdThumbAnimate.pause()
        }
        // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        // Xử lý khi tua song
        progress.onchange = function(e){
            const seekTime = audio.duration  / 100 * e.target.value 
            audio.currentTime = seekTime
        }
        // Khi next song
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Khi prev song
        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Xử lý bật / tắt random song
        randomBtn.onclick = function(e){
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
           randomBtn.classList.toggle('active',_this.isRandom)
        }
        // Xử lý lặp lại một song
        repeatBtn.onclick = function(e){
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }
        // Xử lý next song khi audio ended
        audio.onended = function (){
            if(_this.isRepeat){
                audio.play()
            }else{
                nextBtn.click()
            }
        }
        // Lắng nghe hành vi click vào playlist
        playList.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)')
           if( songNode || e.target.closest('.option')){
            // Xử lý khi click vào song
            if(songNode){
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.render()
                audio.play()
            }
            // Xử lý khi click vào song option
            if(e.target.closest('.option')){

            }
           } 
        }
    },
    scrollToActiveSong: function(){
        setTimeout(()=>{
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }, 300)
    },
    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage =`url(${this.currentSong.image})`
        audio.src = this.currentSong.path

    },
    loadConfig: function(){
        this.isRandom =  this.config.isRandom
        this.isRepeat =  this.config.isRepeat
    },
    nextSong: function(){
        this.currentIndex++
        if (this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function(){
        this.currentIndex--
        if (this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    start: function(){
        // Gán cấu hình từ config vào ứng dụng 
        this.loadConfig()

        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

        // Lắng nghe / xử lý các sự kiện (Dom events)
        this.handleEvents()
  
        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()
  
        // Render playlist
        this.render()

        randomBtn.classList.toggle('active',this.isRandom)
        repeatBtn.classList.toggle('active',this.isRepeat)
    }
}
app.start()