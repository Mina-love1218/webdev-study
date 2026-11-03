/* 재사용 퀴즈 컴포넌트.
   사용법:
   <div class="quiz">
     <div class="q" data-answer="2">            <!-- 정답 보기의 0부터 시작하는 번호 -->
       <p class="q-text">질문</p>
       <div class="opts">
         <button class="opt">보기 A</button> ...
       </div>
       <div class="explain">해설</div>
     </div>
   </div>
   <script src="../assets/quiz.js"></script>
   - 문항마다 첫 시도만 점수에 들어간다 (떠올리기 연습이므로 다시 고를 수 없다).
   - 점수는 localStorage에 저장하지 않는다. 다시 풀 때는 "다시 풀기"를 누른다. */
(function () {
  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var qs = Array.prototype.slice.call(quiz.querySelectorAll(".q"));
    var score = document.createElement("div");
    score.className = "quiz-score";
    var reset = document.createElement("button");
    reset.className = "quiz-reset";
    reset.type = "button";
    reset.textContent = "다시 풀기";
    quiz.appendChild(score);
    quiz.appendChild(reset);

    var correct = 0, answered = 0;
    function render() {
      score.textContent = answered === qs.length
        ? "결과: " + correct + " / " + qs.length + (correct === qs.length ? " · 완벽해요!" : " · 틀린 문항의 해설을 다시 읽어 보세요")
        : "진행: " + answered + " / " + qs.length + " · 정답 " + correct;
    }

    qs.forEach(function (q) {
      var answer = parseInt(q.getAttribute("data-answer"), 10);
      var opts = Array.prototype.slice.call(q.querySelectorAll("button.opt"));
      opts.forEach(function (btn, i) {
        btn.type = "button";
        btn.addEventListener("click", function () {
          if (q.classList.contains("answered")) return;
          q.classList.add("answered");
          answered++;
          if (i === answer) correct++;
          else btn.classList.add("wrong");
          opts[answer].classList.add("correct");
          opts.forEach(function (b) { b.disabled = true; });
          render();
        });
      });
    });

    reset.addEventListener("click", function () {
      correct = 0; answered = 0;
      qs.forEach(function (q) {
        q.classList.remove("answered");
        q.querySelectorAll("button.opt").forEach(function (b) {
          b.disabled = false;
          b.classList.remove("correct", "wrong");
        });
      });
      render();
      quiz.scrollIntoView({ behavior: "smooth" });
    });

    render();
  });
})();
