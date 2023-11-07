var SurveyJsBlazor;
(function (SurveyJsBlazor) {
    function addQuestionProperty() {
        // @ts-ignore
        Survey.Serializer.addProperty("question", {
            name: "score",
            type: "number",
            category: "data"
        });
    }
    SurveyJsBlazor.addQuestionProperty = addQuestionProperty;
})(SurveyJsBlazor || (SurveyJsBlazor = {}));
export default SurveyJsBlazor;
