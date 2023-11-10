declare const Survey;

export type IViewModel = {
    model: any;
}

export type IKoViewModel<T> = {
    ko: T;
    element: Element;
}

module SurveyJsBlazor {
    export function addQuestionProperty() {
        Survey.Serializer.addProperty("question", {
            name: "score",
            type: "number",
            category: "data",
        });
    }
}

export default SurveyJsBlazor;