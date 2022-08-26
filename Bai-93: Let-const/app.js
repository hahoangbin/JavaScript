// Var / Let, Const: Scope, Hosting
// Const / var, Let: Assignment
// Code thuần: Var
// Babel: Const, let
// - Khi đinh nghĩa biến và không 
// gán lại biến đó : Const
//- Khi cần gán lại giá trị cho biến
// : Let

{
    let course = 'Javascript basic!';

    {
        {
            console.log(course);
        }
    }
}

const a = {
    neme: 'Javascript'
};

a = 'PHP';

console.log(a.name);