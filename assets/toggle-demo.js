/* 재사용 토글 데모 컴포넌트.
   체크박스 조합마다 미리 준비한 출력(실제로 실행해서 얻은 값)을 보여 준다.
   사용법:
   <div class="toggle-demo">
     <div class="toggles">
       <label><input type="checkbox" data-key="web"> 설명</label> ...
     </div>
     <pre class="toggle-out"></pre>
     <script type="application/json" class="toggle-data">
       { "": "...", "web": "...", "enum+web": "..." }   // 켜진 key들을 알파벳순으로 + 로 이은 것
     </script>
   </div>
   <script src="../assets/toggle-demo.js"></script>
   - 출력이 JSON 문자열이면 보기 좋게 들여쓰기한다 (data-pretty="json"). */
(function () {
  document.querySelectorAll(".toggle-demo").forEach(function (demo) {
    var data = JSON.parse(demo.querySelector(".toggle-data").textContent);
    var out = demo.querySelector(".toggle-out");
    var boxes = Array.prototype.slice.call(demo.querySelectorAll("input[data-key]"));
    var pretty = demo.getAttribute("data-pretty") === "json";

    function render() {
      var key = boxes.filter(function (b) { return b.checked; })
        .map(function (b) { return b.getAttribute("data-key"); })
        .sort().join("+");
      var value = data[key];
      if (value === undefined) { out.textContent = "(이 조합의 결과는 준비되지 않았어요)"; return; }
      if (pretty) {
        try { value = JSON.stringify(JSON.parse(value), null, 2); } catch (e) { /* 그대로 표시 */ }
      }
      out.textContent = value;
      out.classList.remove("flash");
      void out.offsetWidth;
      out.classList.add("flash");
    }

    boxes.forEach(function (b) { b.addEventListener("change", render); });
    render();
  });
})();
