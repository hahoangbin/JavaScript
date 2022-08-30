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

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
  
  const app ={
      currentIndex: 0,
      isPlaying: false,
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
      render: function(){
          const htmls = this.songs.map(song => {
              return `
                  <div class="song">
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
          // phóng to, thu nhỏ
          document.onscroll = function(){
              const scrollTop = window.scrollY
              const newcdWidht = cdWidth - scrollTop
  
              cd.style.width = newcdWidht > 0?newcdWidht + 'px':0
              cd.style.opacity = newcdWidht / cdWidth
          }
          // xử lý khi click play
          playBtn.onclick = function(){
              if(_this.isPlaying){
                  audio.pause()
              }else{
                  audio.play()
              }
          }
          // khi nhạc chạy
          audio.onplay = function(){
              _this.isPlaying = true
              player.classList.add('playing')
          }
          audio.ontimeupdate = function(){
          }
      },
      loadCurrentSong: function(){
          heading.textContent = this.currentSong.name
          cdThumb.style.backgroundImage =`url(${this.currentSong.image})`
          audio.src = this.currentSong.path
  
      },
      start: function(){
          this.handleEvents()
  
          this.defineProperties()
  
          this.loadCurrentSong()
  
          this.render()
      }
  }
  app.start()