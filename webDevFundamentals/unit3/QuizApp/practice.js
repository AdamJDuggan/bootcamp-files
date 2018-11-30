// template HTML. Question and 4 answers passed in as arguments- WORKING
function printOneQuestion(question, a, b, c, d,){
  return(
    `<form class="container-fluid text-center mt-3 mx-4 quizItem" value="">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="a" id="a">
          <label class="form-check-label" for="inlineRadio1">A. ${a}</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="b" id="b">
          <label class="form-check-label" for="inlineRadio2">B.   ${b}</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="c" id="c">
          <label class="form-check-label" for="inlineRadio3">C.   ${c}</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rbnNumber" value="d" id="d">
          <label class="form-check-label" for="inlineRadio4">D. ${d}</label>
        </div><br>
            <button class="btn btn-secondary mt-4 mb-4 submitAnswer">Submit answer</button>             
      </form>`
  )
}

//into the test div this will print out the template HTML and populate 
// string interplation via the testPrint function
function printAllQuestions(){
  $('.test').html(printOneQuestion(
    'How many teams are there in the Premership (hardcoded)?', 
    10, 15, 20, 25))
}



<!-- STARTER TEST HARDCODED HTML  -->
<form class="container-fluid text-center mt-3 mx-4 quizItem" value="">
<h3 value="">How many teams are there in the Preimership?</h3>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="rbnNumber" value="a" id="a">
  <label class="form-check-label" for="inlineRadio1">A. 10</label>
</div><br>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="rbnNumber" value="b" id="b">
  <label class="form-check-label" for="inlineRadio2">B.  15</label>
</div><br>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="rbnNumber" value="c" id="c">
  <label class="form-check-label" for="inlineRadio3">C.  20</label>
</div><br>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="rbnNumber" value="d" id="d">
  <label class="form-check-label" for="inlineRadio4">D.  25</label>
</div><br>
    <button class="btn btn-secondary mt-4 mb-4 submitAnswer">Submit answer</button>                
</form>
