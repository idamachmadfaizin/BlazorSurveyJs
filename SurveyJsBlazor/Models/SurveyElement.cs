namespace SurveyJsBlazor.Models;
public class SurveyElement<E> : SurveyElementCore
{
    public bool ContainsErrors { get; }
    public object CssClasses { get; } = default!;
    public List<SurveyError> Errors { get; set; } = default!;
    public int Indent { get; set; } = default!;
    public bool IsCollapsed { get; }
    public bool IsExpanded { get; }
    public bool IsPage { get; }
    public bool IsPanel { get; }
    public bool IsQuestion { get; }
    public bool IsReadOnly { get; }
    public string MaxWidth { get; set; } = default!;
    public string MinWidth { get; set; } = default!;
    public string Name { get; set; } = default!;
    public E ParentQuestion { get; } = default!;
    public bool ReadOnly { get; set; } = default!;
    public string RenderWidth { get; set; } = default!;
    public int RightIndent { get; set; } = default!;
    public string State { get; set; } = default!;
    public SurveyModel Survey { get; } = default!;
    public string Width { get; set; } = default!;
}
