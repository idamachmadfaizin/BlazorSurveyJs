"use strict";
///// <reference path="../../node_modules/@types/jquery/index.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var BlazorSurveyJs;
(function (BlazorSurveyJs) {
    //export let viewModel;
    function delayAsync(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    BlazorSurveyJs.delayAsync = delayAsync;
    function injectScripts(src) {
        const container = document.getElementsByTagName('script-container');
        if (container.length === 0) {
            console.error('script-container tag not found inside body tag, please add "<script-container></script-container>" in host file.');
        }
        src.forEach(e => {
            // Create a new script element
            var scriptElement = document.createElement('script');
            scriptElement.onloadeddata = console.log;
            scriptElement.src = e;
            // Append the script element to the body (or another element if needed)
            if (container.length > 0) {
                container[0].appendChild(scriptElement);
            }
            ////document.body.appendChild(scriptElement);
        });
    }
    BlazorSurveyJs.injectScripts = injectScripts;
    function clearInjectedScripts() {
        console.log('clearInjectedScripts');
        const container = document.getElementsByTagName('script-container');
        if (container.length === 0) {
            console.error('script-container tag not found inside body tag, please add "<script-container></script-container>" in host file.');
        }
        else {
            container[0].innerHTML = '';
        }
    }
    BlazorSurveyJs.clearInjectedScripts = clearInjectedScripts;
    function checkJqueryAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("checkJqueryAsync...");
            while (typeof jQuery === 'undefined') {
                yield delayAsync();
            }
            console.log('jQuery is loaded:', jQuery.fn.jquery);
        });
    }
    BlazorSurveyJs.checkJqueryAsync = checkJqueryAsync;
    function checkJquerySurveyAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("checkJquerySurveyAsync...");
            while (typeof jQuery.fn.Survey === 'undefined') {
                yield delayAsync();
            }
            console.log("jQuery SurveyJs Form Library is laoded.");
        });
    }
    BlazorSurveyJs.checkJquerySurveyAsync = checkJquerySurveyAsync;
    function checkKnockoutJsAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("checkKnockoutJsAsync...");
            while (typeof ko === 'undefined') {
                yield delayAsync();
            }
            console.log("Knockout Library is laoded.");
        });
    }
    BlazorSurveyJs.checkKnockoutJsAsync = checkKnockoutJsAsync;
    function checkSurveyCreatorJsAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("checkSurveyCreatorJsAsync...");
            while (typeof SurveyCreator === 'undefined') {
                yield delayAsync();
            }
            console.log("Survey Creator Library is laoded.");
        });
    }
    BlazorSurveyJs.checkSurveyCreatorJsAsync = checkSurveyCreatorJsAsync;
})(BlazorSurveyJs || (BlazorSurveyJs = {}));
