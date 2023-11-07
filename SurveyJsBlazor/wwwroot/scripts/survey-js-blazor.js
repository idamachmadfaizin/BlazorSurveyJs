var SurveyJsBlazor;
(function (SurveyJsBlazor) {
    function addQuestionProperty() {
        Survey.Serializer.addProperty("question", {
            name: "score",
            type: "number",
            category: "data",
        });
    }
    SurveyJsBlazor.addQuestionProperty = addQuestionProperty;
})(SurveyJsBlazor || (SurveyJsBlazor = {}));
export default SurveyJsBlazor;
