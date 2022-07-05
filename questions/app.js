// count = 1;
// let minus = document.querySelectorAll('.plus-icon')
// let plusIcon = document.querySelectorAll('.minus-icon')
// let btns = document.querySelector('.question-btn')

// const styles = document.querySelectorAll('.question');

// // btns.forEach(function (btn) {
// //     btn.addEventListener('click',function(e){
// //         sty=e.currentTarget.classList.toggle('show-text');
// //         styles.classList.add(sty);
// //     })
// // })
// // btns.addEventListener('click',function(btn){

// // })

// questions.forEach(function (question) {
//     const btn = question.querySelector(".question-btn");
//     // console.log(btn);

//     btn.addEventListener("click", function () {
//       // console.log(question);

//       questions.forEach(function (item) {
//         if (item !== question) {
//           item.classList.remove("show-text");
//         }
//       });

//       question.classList.toggle("show-text");
//     });
//   });



// const questions = document.querySelectorAll(".questions");
// quest.forEach(function (ques) {
//   const expbtn = ques.querySelector('.question-btn');
//   console.log(expbtn);
//   expbtn.addEventListener('click', function () {
//     console.log(ques);
//     ques.forEach(function(btnItem){
//       if (btnItem !== ques) {
//         btnItem.classList.remove('Show-text')
        
//       }
//     })
//     ques.classList.toggle('Show-text')
//   })
// })

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});