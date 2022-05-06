const arr = [];
let stdDetails = {};
$(() => {
  $("#showBtn").hide();
  $("#stdTable").hide();
  $("#mainHead").append(
    "<p class='display-4 text-center py-3'>Student Result Calculator</p>"
  );
  console.log(stdDetails);
  $("#subBtn").click(function () {
    if ($.isEmptyObject(stdDetails)) {
      stdDetails.sub = {};
    }
    const StdName = $("#stdName").val().toLowerCase();
    const stdAge = $("#stdAge").val().toLowerCase();
    const stdSub = $("#stdSub").val().toLowerCase();
    const stdMarks = $("#stdMarks").val().toLowerCase();
    const newSub = $("#newSub").val().toLowerCase();
    // let i = 0;
    if (
      StdName !== "" &&
      stdAge !== "" &&
      stdSub !== "" &&
      newSub !== "" &&
      stdMarks !== ""
    ) {
      function stdDetailsFun() {
        stdDetails.age = stdAge;
        stdDetails.name = StdName;
        Object.assign(stdDetails.sub, { [stdSub]: stdMarks });
      }

      if (newSub === "y" || newSub === "yes") {
        console.log(stdDetails.sub);
        $("#stdName,#stdAge,#labelName,#labelAge").hide();
        stdDetailsFun();
        // stdDetails.sub[i][stdSub] = stdMarks;
        // i++;
        // stdDetails.sub[stdSub] = stdMarks;
        $("#stdSub,#stdMarks,#newSub").val("");
        console.log(arr);
        console.log(stdDetails);
      }

      if (newSub === "n" || newSub === "no") {
        stdDetailsFun();
        arr.push(stdDetails);
        $("#stdName,#stdAge,#labelName,#labelAge").show();
        $("#stdName,#stdAge,#stdSub,#stdMarks,#newSub").val("");
        stdDetails = {};
        console.log(arr);
        console.log(stdDetails);
      }

      if (arr.length !== 0) {
        $("#showBtn").show();
      }
    }
  });
  $("#showBtn").click(function () {
    $("#stdTable").show();
  });
});
