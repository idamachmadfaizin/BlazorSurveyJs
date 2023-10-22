export function init() {
    const surveyJson = {
        elements: [{
                name: "FirstName",
                title: "Enter your first name:",
                type: "text"
            }, {
                name: "LastName",
                title: "Enter your last name:",
                type: "text"
            }]
    };
    const survey = new Survey.Model(surveyJson);
    ko.applyBindings({
        model: survey
    });
}
