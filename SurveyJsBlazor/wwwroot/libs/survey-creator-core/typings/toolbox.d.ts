import { Action, AdaptiveActionContainer, Base, IAction, Question } from "survey-core";
import { CreatorBase, toolboxLocationType } from "./creator-base";
/**
 * The Toolbox item description.
 */
export interface IQuestionToolboxItem extends IAction {
    /**
     * A unique name
     */
    name: string;
    /**
     * Icon name
     */
    iconName: string;
    /**
     * The JSON that used to create a new question/panel. The 'type' attribute is required.
     */
    json: any;
    /**
     * Toolbox item title
     */
    title: string;
    className: string;
    /**
     * Toolbox item tooltip. It equals to title if it is empty
     */
    tooltip?: string;
    /**
     * True, if an end user added this item into Toolbox from the survey.
     */
    isCopied: boolean;
    /**
     * Toolbox item category. If it is empty, it goes to 'General' category.
     */
    category: string;
}
export interface IQuestionToolbox {
    toggleCategoryState(name: string): any;
}
export declare class QuestionToolboxCategory extends Base {
    private toolbox;
    constructor(toolbox: IQuestionToolbox);
    name: string;
    items: Array<QuestionToolboxItem>;
    collapsed: boolean;
    toggleState(): void;
}
export declare class QuestionToolboxItem extends Action implements IQuestionToolboxItem {
    private item;
    constructor(item: IQuestionToolboxItem);
    className: string;
    iconName: string;
    name: string;
    json: any;
    tooltip: string;
    isCopied: boolean;
    category: string;
    toJSON(): IQuestionToolboxItem;
    get typeName(): string;
    get isPanel(): boolean;
}
/**
 * The list of Toolbox items.
 */
export declare class QuestionToolbox extends AdaptiveActionContainer<QuestionToolboxItem> implements IQuestionToolbox {
    private supportedQuestions;
    creator: CreatorBase;
    static hiddenTypes: string[];
    static defaultIconName: string;
    static defaultCategories: {
        toolboxChoiceCategory: string[];
        toolboxTextCategory: string[];
        toolboxContainersCategory: string[];
        toolboxMatrixCategory: string[];
        toolboxMiscCategory: string[];
    };
    private _orderedQuestions;
    static getQuestionDefaultSettings(questionType: string): any;
    /**
     * Modify this array to change the toolbox items order.
     */
    get orderedQuestions(): string[];
    set orderedQuestions(questions: string[]);
    /**
     * The maximum number of copied toolbox items. If an user adding copiedItemMaxCount + 1 item, the first added item will be removed.
     */
    copiedItemMaxCount: number;
    private allowExpandMultipleCategoriesValue;
    private keepAllCategoriesExpandedValue;
    private showCategoryTitlesValue;
    private dragOrClickHelper;
    /**
     * Contains toolbox categories and allows you to modify them.
     *
     * [View Demo](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcategories)
     */
    categories: Array<QuestionToolboxCategory>;
    /**
     * Set and get and active category. This property doesn't work if allowExpandMultipleCategories is true. Its default value is empty.
     * @see allowExpandMultipleCategories
     * @see expandCategory
     * @see collapseCategory
     */
    activeCategory: string;
    hasCategories: boolean;
    canCollapseCategories: boolean;
    /**
     * Indicates whether the toolbox is currently in compact mode.
     * @see forceCompact
     */
    isCompact: boolean;
    /**
     * Specifies whether the toolbox should be in compact or full mode.
     * Accepts the following values:
     * - `true` - Toolbox is always in compact mode.
     * - `false` - Toolbox is always in full mode.
     * - `undefined` - Toolbox switches between the full and compact modes automatically based on available width.
     * @see isCompact
     */
    forceCompact: boolean;
    constructor(supportedQuestions?: Array<string>, creator?: CreatorBase, useDefaultCategories?: boolean);
    private initDotsItem;
    private getDefaultQuestionCategories;
    private onActiveCategoryChanged;
    setLocation(toolboxLocation: toolboxLocationType): void;
    /**
     * The Array of Toolbox items as Text JSON.
     */
    get jsonText(): string;
    set jsonText(value: string);
    /**
     * The Array of copied Toolbox items as Text JSON.
     */
    get copiedJsonText(): string;
    set copiedJsonText(value: string);
    /**
     * The Array of Toolbox items.
     */
    get items(): Array<QuestionToolboxItem>;
    get itemNames(): Array<string>;
    /**
     * The Array of copied Toolbox items
     */
    get copiedItems(): Array<QuestionToolboxItem>;
    /**
     * Add toolbox items into the Toolbox
     * @param items the list of new items
     * @param clearAll set it to true to clear all previous items.
     */
    addItems(items: Array<IQuestionToolboxItem>, clearAll?: boolean): void;
    /**
     * Add a copied Question into Toolbox
     * @param question a copied Survey.Question
     * @param options a json object that allows you to override question properties. Attributes are: name, title, tooltip, isCopied, iconName, json and category.
     */
    addCopiedItem(question: Question, options?: any): void;
    /**
     * Add a toolbox item
     * @param item the toolbox item description
     * @param index the toolbox index to place the item, the item is added to the end if index not passed
     * @see IQuestionToolboxItem
     */
    private getActionByItem;
    addItem(item: IQuestionToolboxItem, index?: number): void;
    private correctItem;
    private get dragDropHelper();
    /**
     * Add a new toolbox item, add delete the old item with the same name
     * @param item the toolbox item description
     * @see IQuestionToolboxItem
     */
    replaceItem(item: IQuestionToolboxItem): boolean;
    /**
     * Remove a toolbox item by its name
     * @param name toolbox item name
     * @see IQuestionToolboxItem
     */
    removeItem(name: string): boolean;
    /**
     * Remove all toolbox items.
     */
    clearItems(): void;
    /**
     * Remove all copied toolbox items.
     */
    clearCopiedItems(): void;
    /**
     * Returns toolbox item by its name. Returns null if there is no toolbox item with this name
     * @param name
     */
    getItemByName(name: string): IQuestionToolboxItem;
    /**
     * Set it to true, to allow end-user to expand more than one category. There will no active category in this case
     * @see activeCategory
     */
    get allowExpandMultipleCategories(): boolean;
    set allowExpandMultipleCategories(val: boolean);
    /**
     * Set it to true to expand all categories and hide expand/collapse category buttons
     */
    get keepAllCategoriesExpanded(): boolean;
    set keepAllCategoriesExpanded(val: boolean);
    /**
     * Specifies whether to display category titles in the Toolbox.
     *
     * If you disable this property, the Toolbox hides the titles but continues to display horizontal lines that divide categories. To remove these lines as well, call the `removeCategories()` method.
     * @see removeCategories
     */
    get showCategoryTitles(): boolean;
    set showCategoryTitles(val: boolean);
    updateTitles(): void;
    private updateCategoriesState;
    /**
     * Change the category of the toolbox item
     * @param name the toolbox item name
     * @param category new category name
     */
    changeCategory(name: string, category: string): void;
    /**
     * Change categories for several toolbox items.
     * @param changedItems the array of objects {name: "your toolbox item name", category: "new category name"}
     */
    changeCategories(changedItems: Array<any>): void;
    /**
     * Removes categories from the Toolbox.
     */
    removeCategories(): void;
    toggleCategoryState(categoryName: string): void;
    /**
     * Expand a category by its name. If allowExpandMultipleCategories is false (default value), all other categories become collapsed
     * @param categoryName the category name
     * @see allowExpandMultipleCategories
     * @see collapseCategory
     */
    expandCategory(categoryName: string): void;
    /**
     * Collapse a category by its name. If allowExpandMultipleCategories is false (default value) this function does nothing
     * @param categoryName the category name
     * @see allowExpandMultipleCategories
     */
    collapseCategory(categoryName: string): void;
    /**
     * Expand all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
     * @see allowExpandMultipleCategories
     */
    expandAllCategories(): void;
    /**
     * Collapse all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
     * @see allowExpandMultipleCategories
     */
    collapseAllCategories(): void;
    hiddenItemSelected(model: Action): void;
    private expandCollapseAllCategories;
    private getCategoryByName;
    protected onItemsChanged(): void;
    protected createCategory(): QuestionToolboxCategory;
    private indexOf;
    private updateItemSeparators;
    private reorderItems;
    /**
     * Adds default items to the Toolbox. If the Toolbox contains any items before you call this method, they will be removed.
     * @param supportedQuestions Specifies which question and panel types to include in the Toolbox.
     * @param useDefaultCategories Pass `true` if you want to create default categories.
     */
    createDefaultItems(supportedQuestions: Array<string>, useDefaultCategories: boolean): void;
    private registerCustomWidgets;
    private registerComponentQuestions;
    private getComponentItems;
    private addItemFromJSON;
    private getQuestionJSON;
    private isHiddenCustomWidget;
    private getQuestionTypes;
}
