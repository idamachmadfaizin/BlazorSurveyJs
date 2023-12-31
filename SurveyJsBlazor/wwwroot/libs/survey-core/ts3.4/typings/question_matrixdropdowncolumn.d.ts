import { Question } from "./question";
import { Base } from "./base";
import { ISurvey, IWrapperObject } from "./base-interfaces";
import { ItemValue } from "./itemvalue";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { SurveyValidator } from "./validator";
import { MatrixDropdownRowModelBase } from "./question_matrixdropdownbase";
export interface IMatrixColumnOwner extends ILocalizableOwner {
    getRequiredText(): string;
    hasChoices(): boolean;
    onColumnPropertyChanged(column: MatrixDropdownColumn, name: string, newValue: any): void;
    onColumnItemValuePropertyChanged(column: MatrixDropdownColumn, propertyName: string, obj: ItemValue, name: string, newValue: any, oldValue: any): void;
    onShowInMultipleColumnsChanged(column: MatrixDropdownColumn): void;
    onColumnVisibilityChanged(column: MatrixDropdownColumn): void;
    getCellType(): string;
    getCustomCellType(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, cellType: string): string;
    onColumnCellTypeChanged(column: MatrixDropdownColumn): void;
}
export declare var matrixDropdownColumnTypes: any;
export declare class MatrixDropdownColumn extends Base implements ILocalizableOwner, IWrapperObject {
    static getColumnTypes(): Array<string>;
    private templateQuestionValue;
    private colOwnerValue;
    private indexValue;
    private _hasVisibleCell;
    private _visiblechoices;
    constructor(name: string, title?: string);
    getOriginalObj(): Base;
    getClassNameProperty(): string;
    getSurvey(live?: boolean): ISurvey;
    endLoadingFromJson(): void;
    getDynamicPropertyName(): string;
    getDynamicType(): string;
    colOwner: IMatrixColumnOwner;
    locStrsChanged(): void;
    addUsedLocales(locales: Array<string>): void;
    readonly index: number;
    setIndex(val: number): void;
    getType(): string;
    cellType: string;
    readonly templateQuestion: Question;
    readonly value: string;
    readonly isVisible: boolean;
    readonly isColumnVisible: boolean;
    visible: boolean;
    hasVisibleCell: boolean;
    getVisibleMultipleChoices(): Array<ItemValue>;
    readonly getVisibleChoicesInCell: Array<any>;
    setVisibleChoicesInCell(val: Array<any>): void;
    readonly isFilteredMultipleColumns: boolean;
    name: string;
    title: string;
    readonly locTitle: LocalizableString;
    readonly fullTitle: string;
    isRequired: boolean;
    isRenderedRequired: boolean;
    updateIsRenderedRequired(val: boolean): void;
    readonly requiredText: string;
    requiredErrorText: string;
    readonly locRequiredErrorText: LocalizableString;
    readOnly: boolean;
    hasOther: boolean;
    visibleIf: string;
    enableIf: string;
    requiredIf: string;
    resetValueIf: string;
    defaultValueExpression: string;
    setValueIf: string;
    setValueExpession: string;
    isUnique: boolean;
    showInMultipleColumns: boolean;
    readonly isSupportMultipleColumns: boolean;
    readonly isShowInMultipleColumns: boolean;
    validators: Array<SurveyValidator>;
    totalType: string;
    totalExpression: string;
    readonly hasTotal: boolean;
    totalFormat: string;
    readonly locTotalFormat: LocalizableString;
    cellHint: string;
    readonly locCellHint: LocalizableString;
    renderAs: string;
    totalMaximumFractionDigits: number;
    totalMinimumFractionDigits: number;
    totalDisplayStyle: string;
    totalCurrency: string;
    minWidth: string;
    width: string;
    colCount: number;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    createCellQuestion(row: MatrixDropdownRowModelBase): Question;
    startLoadingFromJson(json?: any): void;
    updateCellQuestion(cellQuestion: Question, data: any, onUpdateJson?: (json: any) => any): void;
    private callOnCellQuestionUpdate;
    defaultCellTypeChanged(): void;
    protected calcCellQuestionType(row: MatrixDropdownRowModelBase): string;
    private getDefaultCellQuestionType;
    protected updateTemplateQuestion(newCellType?: string): void;
    protected createNewQuestion(cellType: string): Question;
    private setParentQuestionToTemplate;
    private previousChoicesId;
    protected setQuestionProperties(question: Question, onUpdateJson?: (json: any) => any): void;
    protected propertyValueChanged(name: string, oldValue: any, newValue: any): void;
    private doItemValuePropertyChanged;
    private doShowInMultipleColumnsChanged;
    private doColumnVisibilityChanged;
    private getProperties;
    private removeProperties;
    private addProperties;
    private addProperty;
}
