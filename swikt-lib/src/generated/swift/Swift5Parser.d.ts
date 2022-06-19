declare class Swift5Parser {
    static grammarFileName: string;
    static literalNames: string[];
    static symbolicNames: string[];
    static ruleNames: string[];
    constructor(input: any);
    _interp: any;
    ruleNames: string[];
    literalNames: string[];
    symbolicNames: string[];
    buildParseTrees: boolean;
    get atn(): any;
    sempred(localctx: any, ruleIndex: any, predIndex: any): any;
    statements_sempred(localctx: any, predIndex: any): boolean;
    compilation_condition_sempred(localctx: any, predIndex: any): any;
    pattern_sempred(localctx: any, predIndex: any): any;
    balanced_token_punctuation_sempred(localctx: any, predIndex: any): boolean;
    forced_value_suffix_sempred(localctx: any, predIndex: any): boolean;
    optional_chaining_suffix_sempred(localctx: any, predIndex: any): boolean;
    type_sempred(localctx: any, predIndex: any): any;
    trailing_composition_and_sempred(localctx: any, predIndex: any): boolean;
    assignment_operator_sempred(localctx: any, predIndex: any): boolean;
    negate_prefix_operator_sempred(localctx: any, predIndex: any): boolean;
    compilation_condition_AND_sempred(localctx: any, predIndex: any): boolean;
    compilation_condition_OR_sempred(localctx: any, predIndex: any): boolean;
    compilation_condition_GE_sempred(localctx: any, predIndex: any): boolean;
    compilation_condition_L_sempred(localctx: any, predIndex: any): boolean;
    arrow_operator_sempred(localctx: any, predIndex: any): boolean;
    range_operator_sempred(localctx: any, predIndex: any): boolean;
    same_type_equals_sempred(localctx: any, predIndex: any): boolean;
    binary_operator_sempred(localctx: any, predIndex: any): boolean;
    prefix_operator_sempred(localctx: any, predIndex: any): boolean;
    postfix_operator_sempred(localctx: any, predIndex: any): boolean;
    operator_characters_sempred(localctx: any, predIndex: any): boolean;
    dot_operator_characters_sempred(localctx: any, predIndex: any): boolean;
    top_level(): Top_levelContext;
    state: number;
    statement(): StatementContext;
    statements(): StatementsContext;
    loop_statement(): Loop_statementContext;
    for_in_statement(): For_in_statementContext;
    while_statement(): While_statementContext;
    condition_list(): Condition_listContext;
    condition(): ConditionContext;
    case_condition(): Case_conditionContext;
    optional_binding_condition(): Optional_binding_conditionContext;
    repeat_while_statement(): Repeat_while_statementContext;
    branch_statement(): Branch_statementContext;
    if_statement(): If_statementContext;
    else_clause(): Else_clauseContext;
    guard_statement(): Guard_statementContext;
    switch_statement(): Switch_statementContext;
    switch_cases(): Switch_casesContext;
    switch_case(): Switch_caseContext;
    case_label(): Case_labelContext;
    case_item_list(): Case_item_listContext;
    default_label(): Default_labelContext;
    where_clause(): Where_clauseContext;
    where_expression(): Where_expressionContext;
    conditional_switch_case(): Conditional_switch_caseContext;
    switch_if_directive_clause(): Switch_if_directive_clauseContext;
    switch_elseif_directive_clauses(): Switch_elseif_directive_clausesContext;
    switch_elseif_directive_clause(): Switch_elseif_directive_clauseContext;
    switch_else_directive_clause(): Switch_else_directive_clauseContext;
    labeled_statement(): Labeled_statementContext;
    statement_label(): Statement_labelContext;
    label_name(): Label_nameContext;
    control_transfer_statement(): Control_transfer_statementContext;
    break_statement(): Break_statementContext;
    continue_statement(): Continue_statementContext;
    fallthrough_statement(): Fallthrough_statementContext;
    return_statement(): Return_statementContext;
    throw_statement(): Throw_statementContext;
    defer_statement(): Defer_statementContext;
    do_statement(): Do_statementContext;
    catch_clauses(): Catch_clausesContext;
    catch_clause(): Catch_clauseContext;
    catch_pattern_list(): Catch_pattern_listContext;
    catch_pattern(): Catch_patternContext;
    compiler_control_statement(): Compiler_control_statementContext;
    conditional_compilation_block(): Conditional_compilation_blockContext;
    if_directive_clause(): If_directive_clauseContext;
    elseif_directive_clauses(): Elseif_directive_clausesContext;
    elseif_directive_clause(): Elseif_directive_clauseContext;
    else_directive_clause(): Else_directive_clauseContext;
    compilation_condition(_p: any): Compilation_conditionContext;
    platform_condition(): Platform_conditionContext;
    swift_version(): Swift_versionContext;
    swift_version_continuation(): Swift_version_continuationContext;
    operating_system(): Operating_systemContext;
    architecture(): ArchitectureContext;
    module_name(): Module_nameContext;
    environment(): EnvironmentContext;
    line_control_statement(): Line_control_statementContext;
    line_number(): Line_numberContext;
    file_name(): File_nameContext;
    diagnostic_statement(): Diagnostic_statementContext;
    diagnostic_message(): Diagnostic_messageContext;
    availability_condition(): Availability_conditionContext;
    availability_arguments(): Availability_argumentsContext;
    availability_argument(): Availability_argumentContext;
    platform_name(): Platform_nameContext;
    platform_version(): Platform_versionContext;
    generic_parameter_clause(): Generic_parameter_clauseContext;
    generic_parameter_list(): Generic_parameter_listContext;
    generic_parameter(): Generic_parameterContext;
    generic_where_clause(): Generic_where_clauseContext;
    requirement_list(): Requirement_listContext;
    requirement(): RequirementContext;
    conformance_requirement(): Conformance_requirementContext;
    same_type_requirement(): Same_type_requirementContext;
    generic_argument_clause(): Generic_argument_clauseContext;
    generic_argument_list(): Generic_argument_listContext;
    generic_argument(): Generic_argumentContext;
    declaration(): DeclarationContext;
    declarations(): DeclarationsContext;
    top_level_declaration(): Top_level_declarationContext;
    code_block(): Code_blockContext;
    import_declaration(): Import_declarationContext;
    import_kind(): Import_kindContext;
    import_path(): Import_pathContext;
    import_path_identifier(): Import_path_identifierContext;
    constant_declaration(): Constant_declarationContext;
    pattern_initializer_list(): Pattern_initializer_listContext;
    pattern_initializer(): Pattern_initializerContext;
    initializer(): InitializerContext;
    variable_declaration(): Variable_declarationContext;
    variable_declaration_head(): Variable_declaration_headContext;
    variable_name(): Variable_nameContext;
    getter_setter_block(): Getter_setter_blockContext;
    getter_clause(): Getter_clauseContext;
    setter_clause(): Setter_clauseContext;
    setter_name(): Setter_nameContext;
    getter_setter_keyword_block(): Getter_setter_keyword_blockContext;
    getter_keyword_clause(): Getter_keyword_clauseContext;
    setter_keyword_clause(): Setter_keyword_clauseContext;
    willSet_didSet_block(): WillSet_didSet_blockContext;
    willSet_clause(): WillSet_clauseContext;
    didSet_clause(): DidSet_clauseContext;
    typealias_declaration(): Typealias_declarationContext;
    typealias_name(): Typealias_nameContext;
    typealias_assignment(): Typealias_assignmentContext;
    function_declaration(): Function_declarationContext;
    function_head(): Function_headContext;
    function_name(): Function_nameContext;
    function_signature(): Function_signatureContext;
    function_result(): Function_resultContext;
    function_body(): Function_bodyContext;
    parameter_clause(): Parameter_clauseContext;
    parameter_list(): Parameter_listContext;
    parameter(): ParameterContext;
    external_parameter_name(): External_parameter_nameContext;
    local_parameter_name(): Local_parameter_nameContext;
    default_argument_clause(): Default_argument_clauseContext;
    enum_declaration(): Enum_declarationContext;
    union_style_enum(): Union_style_enumContext;
    union_style_enum_members(): Union_style_enum_membersContext;
    union_style_enum_member(): Union_style_enum_memberContext;
    union_style_enum_case_clause(): Union_style_enum_case_clauseContext;
    union_style_enum_case_list(): Union_style_enum_case_listContext;
    union_style_enum_case(): Union_style_enum_caseContext;
    enum_name(): Enum_nameContext;
    enum_case_name(): Enum_case_nameContext;
    raw_value_style_enum(): Raw_value_style_enumContext;
    raw_value_style_enum_members(): Raw_value_style_enum_membersContext;
    raw_value_style_enum_member(): Raw_value_style_enum_memberContext;
    raw_value_style_enum_case_clause(): Raw_value_style_enum_case_clauseContext;
    raw_value_style_enum_case_list(): Raw_value_style_enum_case_listContext;
    raw_value_style_enum_case(): Raw_value_style_enum_caseContext;
    raw_value_assignment(): Raw_value_assignmentContext;
    raw_value_literal(): Raw_value_literalContext;
    struct_declaration(): Struct_declarationContext;
    struct_name(): Struct_nameContext;
    struct_body(): Struct_bodyContext;
    struct_members(): Struct_membersContext;
    struct_member(): Struct_memberContext;
    class_declaration(): Class_declarationContext;
    class_name(): Class_nameContext;
    class_body(): Class_bodyContext;
    class_members(): Class_membersContext;
    class_member(): Class_memberContext;
    protocol_declaration(): Protocol_declarationContext;
    protocol_name(): Protocol_nameContext;
    protocol_body(): Protocol_bodyContext;
    protocol_members(): Protocol_membersContext;
    protocol_member(): Protocol_memberContext;
    protocol_member_declaration(): Protocol_member_declarationContext;
    protocol_property_declaration(): Protocol_property_declarationContext;
    protocol_method_declaration(): Protocol_method_declarationContext;
    protocol_initializer_declaration(): Protocol_initializer_declarationContext;
    protocol_subscript_declaration(): Protocol_subscript_declarationContext;
    protocol_associated_type_declaration(): Protocol_associated_type_declarationContext;
    initializer_declaration(): Initializer_declarationContext;
    initializer_head(): Initializer_headContext;
    initializer_body(): Initializer_bodyContext;
    deinitializer_declaration(): Deinitializer_declarationContext;
    extension_declaration(): Extension_declarationContext;
    extension_body(): Extension_bodyContext;
    extension_members(): Extension_membersContext;
    extension_member(): Extension_memberContext;
    subscript_declaration(): Subscript_declarationContext;
    subscript_head(): Subscript_headContext;
    subscript_result(): Subscript_resultContext;
    operator_declaration(): Operator_declarationContext;
    prefix_operator_declaration(): Prefix_operator_declarationContext;
    postfix_operator_declaration(): Postfix_operator_declarationContext;
    infix_operator_declaration(): Infix_operator_declarationContext;
    infix_operator_group(): Infix_operator_groupContext;
    precedence_group_declaration(): Precedence_group_declarationContext;
    precedence_group_attributes(): Precedence_group_attributesContext;
    precedence_group_attribute(): Precedence_group_attributeContext;
    precedence_group_relation(): Precedence_group_relationContext;
    precedence_group_assignment(): Precedence_group_assignmentContext;
    precedence_group_associativity(): Precedence_group_associativityContext;
    precedence_group_names(): Precedence_group_namesContext;
    precedence_group_name(): Precedence_group_nameContext;
    declaration_modifier(): Declaration_modifierContext;
    declaration_modifiers(): Declaration_modifiersContext;
    access_level_modifier(): Access_level_modifierContext;
    mutation_modifier(): Mutation_modifierContext;
    pattern(_p: any): PatternContext;
    wildcard_pattern(): Wildcard_patternContext;
    identifier_pattern(): Identifier_patternContext;
    value_binding_pattern(): Value_binding_patternContext;
    tuple_pattern(): Tuple_patternContext;
    tuple_pattern_element_list(): Tuple_pattern_element_listContext;
    tuple_pattern_element(): Tuple_pattern_elementContext;
    enum_case_pattern(): Enum_case_patternContext;
    optional_pattern(): Optional_patternContext;
    expression_pattern(): Expression_patternContext;
    attribute(): AttributeContext;
    attribute_name(): Attribute_nameContext;
    attribute_argument_clause(): Attribute_argument_clauseContext;
    attributes(): AttributesContext;
    balanced_tokens(): Balanced_tokensContext;
    balanced_token(): Balanced_tokenContext;
    balanced_token_punctuation(): Balanced_token_punctuationContext;
    expression(): ExpressionContext;
    expression_list(): Expression_listContext;
    prefix_expression(): Prefix_expressionContext;
    in_out_expression(): In_out_expressionContext;
    try_operator(): Try_operatorContext;
    binary_expression(): Binary_expressionContext;
    binary_expressions(): Binary_expressionsContext;
    conditional_operator(): Conditional_operatorContext;
    type_casting_operator(): Type_casting_operatorContext;
    primary_expression(): Primary_expressionContext;
    unqualified_name(): Unqualified_nameContext;
    literal_expression(): Literal_expressionContext;
    array_literal(): Array_literalContext;
    array_literal_items(): Array_literal_itemsContext;
    array_literal_item(): Array_literal_itemContext;
    dictionary_literal(): Dictionary_literalContext;
    dictionary_literal_items(): Dictionary_literal_itemsContext;
    dictionary_literal_item(): Dictionary_literal_itemContext;
    playground_literal(): Playground_literalContext;
    self_expression(): Self_expressionContext;
    superclass_expression(): Superclass_expressionContext;
    closure_expression(): Closure_expressionContext;
    closure_signature(): Closure_signatureContext;
    closure_parameter_clause(): Closure_parameter_clauseContext;
    closure_parameter_list(): Closure_parameter_listContext;
    closure_parameter(): Closure_parameterContext;
    capture_list(): Capture_listContext;
    capture_list_items(): Capture_list_itemsContext;
    capture_list_item(): Capture_list_itemContext;
    capture_specifier(): Capture_specifierContext;
    implicit_member_expression(): Implicit_member_expressionContext;
    parenthesized_operator(): Parenthesized_operatorContext;
    parenthesized_expression(): Parenthesized_expressionContext;
    tuple_expression(): Tuple_expressionContext;
    tuple_element_list(): Tuple_element_listContext;
    tuple_element(): Tuple_elementContext;
    wildcard_expression(): Wildcard_expressionContext;
    key_path_expression(): Key_path_expressionContext;
    key_path_components(): Key_path_componentsContext;
    key_path_component(): Key_path_componentContext;
    key_path_postfixes(): Key_path_postfixesContext;
    key_path_postfix(): Key_path_postfixContext;
    selector_expression(): Selector_expressionContext;
    key_path_string_expression(): Key_path_string_expressionContext;
    postfix_expression(): Postfix_expressionContext;
    function_call_suffix(): Function_call_suffixContext;
    initializer_suffix(): Initializer_suffixContext;
    explicit_member_suffix(): Explicit_member_suffixContext;
    postfix_self_suffix(): Postfix_self_suffixContext;
    subscript_suffix(): Subscript_suffixContext;
    forced_value_suffix(): Forced_value_suffixContext;
    optional_chaining_suffix(): Optional_chaining_suffixContext;
    function_call_argument_clause(): Function_call_argument_clauseContext;
    function_call_argument_list(): Function_call_argument_listContext;
    function_call_argument(): Function_call_argumentContext;
    trailing_closures(): Trailing_closuresContext;
    labeled_trailing_closures(): Labeled_trailing_closuresContext;
    labeled_trailing_closure(): Labeled_trailing_closureContext;
    argument_names(): Argument_namesContext;
    argument_name(): Argument_nameContext;
    type(_p: any): TypeContext;
    type_annotation(): Type_annotationContext;
    type_identifier(): Type_identifierContext;
    type_name(): Type_nameContext;
    tuple_type(): Tuple_typeContext;
    tuple_type_element_list(): Tuple_type_element_listContext;
    tuple_type_element(): Tuple_type_elementContext;
    element_name(): Element_nameContext;
    function_type(): Function_typeContext;
    function_type_argument_clause(): Function_type_argument_clauseContext;
    function_type_argument_list(): Function_type_argument_listContext;
    function_type_argument(): Function_type_argumentContext;
    argument_label(): Argument_labelContext;
    array_type(): Array_typeContext;
    dictionary_type(): Dictionary_typeContext;
    protocol_composition_type(): Protocol_composition_typeContext;
    trailing_composition_and(): Trailing_composition_andContext;
    opaque_type(): Opaque_typeContext;
    any_type(): Any_typeContext;
    self_type(): Self_typeContext;
    type_inheritance_clause(): Type_inheritance_clauseContext;
    type_inheritance_list(): Type_inheritance_listContext;
    identifier(): IdentifierContext;
    identifier_list(): Identifier_listContext;
    keyword(): KeywordContext;
    assignment_operator(): Assignment_operatorContext;
    negate_prefix_operator(): Negate_prefix_operatorContext;
    compilation_condition_AND(): Compilation_condition_ANDContext;
    compilation_condition_OR(): Compilation_condition_ORContext;
    compilation_condition_GE(): Compilation_condition_GEContext;
    compilation_condition_L(): Compilation_condition_LContext;
    arrow_operator(): Arrow_operatorContext;
    range_operator(): Range_operatorContext;
    same_type_equals(): Same_type_equalsContext;
    binary_operator(): Binary_operatorContext;
    prefix_operator(): Prefix_operatorContext;
    postfix_operator(): Postfix_operatorContext;
    operator(): OperatorContext;
    operator_head(): Operator_headContext;
    operator_character(): Operator_characterContext;
    operator_characters(): Operator_charactersContext;
    dot_operator_head(): Dot_operator_headContext;
    dot_operator_character(): Dot_operator_characterContext;
    dot_operator_characters(): Dot_operator_charactersContext;
    literal(): LiteralContext;
    numeric_literal(): Numeric_literalContext;
    boolean_literal(): Boolean_literalContext;
    nil_literal(): Nil_literalContext;
    integer_literal(): Integer_literalContext;
    string_literal(): String_literalContext;
    extended_string_literal(): Extended_string_literalContext;
    static_string_literal(): Static_string_literalContext;
    interpolated_string_literal(): Interpolated_string_literalContext;
}
declare namespace Swift5Parser {
    export const EOF: any;
    export const AS: number;
    export const ALPHA: number;
    export const BREAK: number;
    export const CASE: number;
    export const CATCH: number;
    export const CLASS: number;
    export const CONTINUE: number;
    export const DEFAULT: number;
    export const DEFER: number;
    export const DO: number;
    export const GUARD: number;
    export const ELSE: number;
    export const ENUM: number;
    export const FOR: number;
    export const FALLTHROUGH: number;
    export const FUNC: number;
    export const IN: number;
    export const IF: number;
    export const IMPORT: number;
    export const INTERNAL: number;
    export const FINAL: number;
    export const OPEN: number;
    export const PRIVATE: number;
    export const PUBLIC: number;
    export const WHERE: number;
    export const WHILE: number;
    export const LET: number;
    export const VAR: number;
    export const PROTOCOL: number;
    export const GET: number;
    export const SET: number;
    export const WILL_SET: number;
    export const DID_SET: number;
    export const REPEAT: number;
    export const SWITCH: number;
    export const STRUCT: number;
    export const RETURN: number;
    export const THROW: number;
    export const THROWS: number;
    export const RETHROWS: number;
    export const INDIRECT: number;
    export const INIT: number;
    export const DEINIT: number;
    export const ASSOCIATED_TYPE: number;
    export const EXTENSION: number;
    export const SUBSCRIPT: number;
    export const PREFIX: number;
    export const INFIX: number;
    export const LEFT: number;
    export const RIGHT: number;
    export const NONE: number;
    export const PRECEDENCE_GROUP: number;
    export const HIGHER_THAN: number;
    export const LOWER_THAN: number;
    export const ASSIGNMENT: number;
    export const ASSOCIATIVITY: number;
    export const POSTFIX: number;
    export const OPERATOR: number;
    export const TYPEALIAS: number;
    export const OS: number;
    export const ARCH: number;
    export const SWIFT: number;
    export const COMPILER: number;
    export const CAN_IMPORT: number;
    export const TARGET_ENVIRONMENT: number;
    export const CONVENIENCE: number;
    export const DYNAMIC: number;
    export const LAZY: number;
    export const OPTIONAL: number;
    export const OVERRIDE: number;
    export const REQUIRED: number;
    export const STATIC: number;
    export const WEAK: number;
    export const UNOWNED: number;
    export const SAFE: number;
    export const UNSAFE: number;
    export const MUTATING: number;
    export const NONMUTATING: number;
    export const FILE_PRIVATE: number;
    export const IS: number;
    export const TRY: number;
    export const SUPER: number;
    export const ANY: number;
    export const FALSE: number;
    export const RED: number;
    export const BLUE: number;
    export const GREEN: number;
    export const RESOURCE_NAME: number;
    export const TRUE: number;
    export const NIL: number;
    export const INOUT: number;
    export const SOME: number;
    export const TYPE: number;
    export const PRECEDENCE: number;
    export const SELF: number;
    export const SELF_BIG: number;
    export const MAC_OS: number;
    export const I_OS: number;
    export const OSX: number;
    export const WATCH_OS: number;
    export const TV_OS: number;
    export const LINUX: number;
    export const WINDOWS: number;
    export const I386: number;
    export const X86_64: number;
    export const ARM: number;
    export const ARM64: number;
    export const SIMULATOR: number;
    export const MAC_CATALYST: number;
    export const I_OS_APPLICATION_EXTENSION: number;
    export const MAC_CATALYST_APPLICATION_EXTENSION: number;
    export const MAC_OS_APPLICATION_EXTENSION: number;
    export const SOURCE_LOCATION: number;
    export const FILE: number;
    export const LINE: number;
    export const ERROR: number;
    export const WARNING: number;
    export const AVAILABLE: number;
    export const HASH_IF: number;
    export const HASH_ELSEIF: number;
    export const HASH_ELSE: number;
    export const HASH_ENDIF: number;
    export const HASH_FILE: number;
    export const HASH_FILE_ID: number;
    export const HASH_FILE_PATH: number;
    export const HASH_LINE: number;
    export const HASH_COLUMN: number;
    export const HASH_FUNCTION: number;
    export const HASH_DSO_HANDLE: number;
    export const HASH_SELECTOR: number;
    export const HASH_KEYPATH: number;
    export const HASH_COLOR_LITERAL: number;
    export const HASH_FILE_LITERAL: number;
    export const HASH_IMAGE_LITERAL: number;
    export const GETTER: number;
    export const SETTER: number;
    export const Identifier: number;
    export const DOT: number;
    export const LCURLY: number;
    export const LPAREN: number;
    export const LBRACK: number;
    export const RCURLY: number;
    export const RPAREN: number;
    export const RBRACK: number;
    export const COMMA: number;
    export const COLON: number;
    export const SEMI: number;
    export const LT: number;
    export const GT: number;
    export const UNDERSCORE: number;
    export const BANG: number;
    export const QUESTION: number;
    export const AT: number;
    export const AND: number;
    export const SUB: number;
    export const EQUAL: number;
    export const OR: number;
    export const DIV: number;
    export const ADD: number;
    export const MUL: number;
    export const MOD: number;
    export const CARET: number;
    export const TILDE: number;
    export const HASH: number;
    export const BACKTICK: number;
    export const DOLLAR: number;
    export const BACKSLASH: number;
    export const Operator_head_other: number;
    export const Operator_following_character: number;
    export const Binary_literal: number;
    export const Octal_literal: number;
    export const Decimal_digits: number;
    export const Decimal_literal: number;
    export const Hexadecimal_literal: number;
    export const Floating_point_literal: number;
    export const WS: number;
    export const HASHBANG: number;
    export const Block_comment: number;
    export const Line_comment: number;
    export const Multi_line_extended_string_open: number;
    export const Single_line_extended_string_open: number;
    export const Multi_line_string_open: number;
    export const Single_line_string_open: number;
    export const Interpolataion_single_line: number;
    export const Single_line_string_close: number;
    export const Quoted_single_line_text: number;
    export const Interpolataion_multi_line: number;
    export const Multi_line_string_close: number;
    export const Quoted_multi_line_text: number;
    export const Single_line_extended_string_close: number;
    export const Quoted_single_line_extended_text: number;
    export const Multi_line_extended_string_close: number;
    export const Quoted_multi_line_extended_text: number;
    export const RULE_top_level: number;
    export const RULE_statement: number;
    export const RULE_statements: number;
    export const RULE_loop_statement: number;
    export const RULE_for_in_statement: number;
    export const RULE_while_statement: number;
    export const RULE_condition_list: number;
    export const RULE_condition: number;
    export const RULE_case_condition: number;
    export const RULE_optional_binding_condition: number;
    export const RULE_repeat_while_statement: number;
    export const RULE_branch_statement: number;
    export const RULE_if_statement: number;
    export const RULE_else_clause: number;
    export const RULE_guard_statement: number;
    export const RULE_switch_statement: number;
    export const RULE_switch_cases: number;
    export const RULE_switch_case: number;
    export const RULE_case_label: number;
    export const RULE_case_item_list: number;
    export const RULE_default_label: number;
    export const RULE_where_clause: number;
    export const RULE_where_expression: number;
    export const RULE_conditional_switch_case: number;
    export const RULE_switch_if_directive_clause: number;
    export const RULE_switch_elseif_directive_clauses: number;
    export const RULE_switch_elseif_directive_clause: number;
    export const RULE_switch_else_directive_clause: number;
    export const RULE_labeled_statement: number;
    export const RULE_statement_label: number;
    export const RULE_label_name: number;
    export const RULE_control_transfer_statement: number;
    export const RULE_break_statement: number;
    export const RULE_continue_statement: number;
    export const RULE_fallthrough_statement: number;
    export const RULE_return_statement: number;
    export const RULE_throw_statement: number;
    export const RULE_defer_statement: number;
    export const RULE_do_statement: number;
    export const RULE_catch_clauses: number;
    export const RULE_catch_clause: number;
    export const RULE_catch_pattern_list: number;
    export const RULE_catch_pattern: number;
    export const RULE_compiler_control_statement: number;
    export const RULE_conditional_compilation_block: number;
    export const RULE_if_directive_clause: number;
    export const RULE_elseif_directive_clauses: number;
    export const RULE_elseif_directive_clause: number;
    export const RULE_else_directive_clause: number;
    export const RULE_compilation_condition: number;
    export const RULE_platform_condition: number;
    export const RULE_swift_version: number;
    export const RULE_swift_version_continuation: number;
    export const RULE_operating_system: number;
    export const RULE_architecture: number;
    export const RULE_module_name: number;
    export const RULE_environment: number;
    export const RULE_line_control_statement: number;
    export const RULE_line_number: number;
    export const RULE_file_name: number;
    export const RULE_diagnostic_statement: number;
    export const RULE_diagnostic_message: number;
    export const RULE_availability_condition: number;
    export const RULE_availability_arguments: number;
    export const RULE_availability_argument: number;
    export const RULE_platform_name: number;
    export const RULE_platform_version: number;
    export const RULE_generic_parameter_clause: number;
    export const RULE_generic_parameter_list: number;
    export const RULE_generic_parameter: number;
    export const RULE_generic_where_clause: number;
    export const RULE_requirement_list: number;
    export const RULE_requirement: number;
    export const RULE_conformance_requirement: number;
    export const RULE_same_type_requirement: number;
    export const RULE_generic_argument_clause: number;
    export const RULE_generic_argument_list: number;
    export const RULE_generic_argument: number;
    export const RULE_declaration: number;
    export const RULE_declarations: number;
    export const RULE_top_level_declaration: number;
    export const RULE_code_block: number;
    export const RULE_import_declaration: number;
    export const RULE_import_kind: number;
    export const RULE_import_path: number;
    export const RULE_import_path_identifier: number;
    export const RULE_constant_declaration: number;
    export const RULE_pattern_initializer_list: number;
    export const RULE_pattern_initializer: number;
    export const RULE_initializer: number;
    export const RULE_variable_declaration: number;
    export const RULE_variable_declaration_head: number;
    export const RULE_variable_name: number;
    export const RULE_getter_setter_block: number;
    export const RULE_getter_clause: number;
    export const RULE_setter_clause: number;
    export const RULE_setter_name: number;
    export const RULE_getter_setter_keyword_block: number;
    export const RULE_getter_keyword_clause: number;
    export const RULE_setter_keyword_clause: number;
    export const RULE_willSet_didSet_block: number;
    export const RULE_willSet_clause: number;
    export const RULE_didSet_clause: number;
    export const RULE_typealias_declaration: number;
    export const RULE_typealias_name: number;
    export const RULE_typealias_assignment: number;
    export const RULE_function_declaration: number;
    export const RULE_function_head: number;
    export const RULE_function_name: number;
    export const RULE_function_signature: number;
    export const RULE_function_result: number;
    export const RULE_function_body: number;
    export const RULE_parameter_clause: number;
    export const RULE_parameter_list: number;
    export const RULE_parameter: number;
    export const RULE_external_parameter_name: number;
    export const RULE_local_parameter_name: number;
    export const RULE_default_argument_clause: number;
    export const RULE_enum_declaration: number;
    export const RULE_union_style_enum: number;
    export const RULE_union_style_enum_members: number;
    export const RULE_union_style_enum_member: number;
    export const RULE_union_style_enum_case_clause: number;
    export const RULE_union_style_enum_case_list: number;
    export const RULE_union_style_enum_case: number;
    export const RULE_enum_name: number;
    export const RULE_enum_case_name: number;
    export const RULE_raw_value_style_enum: number;
    export const RULE_raw_value_style_enum_members: number;
    export const RULE_raw_value_style_enum_member: number;
    export const RULE_raw_value_style_enum_case_clause: number;
    export const RULE_raw_value_style_enum_case_list: number;
    export const RULE_raw_value_style_enum_case: number;
    export const RULE_raw_value_assignment: number;
    export const RULE_raw_value_literal: number;
    export const RULE_struct_declaration: number;
    export const RULE_struct_name: number;
    export const RULE_struct_body: number;
    export const RULE_struct_members: number;
    export const RULE_struct_member: number;
    export const RULE_class_declaration: number;
    export const RULE_class_name: number;
    export const RULE_class_body: number;
    export const RULE_class_members: number;
    export const RULE_class_member: number;
    export const RULE_protocol_declaration: number;
    export const RULE_protocol_name: number;
    export const RULE_protocol_body: number;
    export const RULE_protocol_members: number;
    export const RULE_protocol_member: number;
    export const RULE_protocol_member_declaration: number;
    export const RULE_protocol_property_declaration: number;
    export const RULE_protocol_method_declaration: number;
    export const RULE_protocol_initializer_declaration: number;
    export const RULE_protocol_subscript_declaration: number;
    export const RULE_protocol_associated_type_declaration: number;
    export const RULE_initializer_declaration: number;
    export const RULE_initializer_head: number;
    export const RULE_initializer_body: number;
    export const RULE_deinitializer_declaration: number;
    export const RULE_extension_declaration: number;
    export const RULE_extension_body: number;
    export const RULE_extension_members: number;
    export const RULE_extension_member: number;
    export const RULE_subscript_declaration: number;
    export const RULE_subscript_head: number;
    export const RULE_subscript_result: number;
    export const RULE_operator_declaration: number;
    export const RULE_prefix_operator_declaration: number;
    export const RULE_postfix_operator_declaration: number;
    export const RULE_infix_operator_declaration: number;
    export const RULE_infix_operator_group: number;
    export const RULE_precedence_group_declaration: number;
    export const RULE_precedence_group_attributes: number;
    export const RULE_precedence_group_attribute: number;
    export const RULE_precedence_group_relation: number;
    export const RULE_precedence_group_assignment: number;
    export const RULE_precedence_group_associativity: number;
    export const RULE_precedence_group_names: number;
    export const RULE_precedence_group_name: number;
    export const RULE_declaration_modifier: number;
    export const RULE_declaration_modifiers: number;
    export const RULE_access_level_modifier: number;
    export const RULE_mutation_modifier: number;
    export const RULE_pattern: number;
    export const RULE_wildcard_pattern: number;
    export const RULE_identifier_pattern: number;
    export const RULE_value_binding_pattern: number;
    export const RULE_tuple_pattern: number;
    export const RULE_tuple_pattern_element_list: number;
    export const RULE_tuple_pattern_element: number;
    export const RULE_enum_case_pattern: number;
    export const RULE_optional_pattern: number;
    export const RULE_expression_pattern: number;
    export const RULE_attribute: number;
    export const RULE_attribute_name: number;
    export const RULE_attribute_argument_clause: number;
    export const RULE_attributes: number;
    export const RULE_balanced_tokens: number;
    export const RULE_balanced_token: number;
    export const RULE_balanced_token_punctuation: number;
    export const RULE_expression: number;
    export const RULE_expression_list: number;
    export const RULE_prefix_expression: number;
    export const RULE_in_out_expression: number;
    export const RULE_try_operator: number;
    export const RULE_binary_expression: number;
    export const RULE_binary_expressions: number;
    export const RULE_conditional_operator: number;
    export const RULE_type_casting_operator: number;
    export const RULE_primary_expression: number;
    export const RULE_unqualified_name: number;
    export const RULE_literal_expression: number;
    export const RULE_array_literal: number;
    export const RULE_array_literal_items: number;
    export const RULE_array_literal_item: number;
    export const RULE_dictionary_literal: number;
    export const RULE_dictionary_literal_items: number;
    export const RULE_dictionary_literal_item: number;
    export const RULE_playground_literal: number;
    export const RULE_self_expression: number;
    export const RULE_superclass_expression: number;
    export const RULE_closure_expression: number;
    export const RULE_closure_signature: number;
    export const RULE_closure_parameter_clause: number;
    export const RULE_closure_parameter_list: number;
    export const RULE_closure_parameter: number;
    export const RULE_capture_list: number;
    export const RULE_capture_list_items: number;
    export const RULE_capture_list_item: number;
    export const RULE_capture_specifier: number;
    export const RULE_implicit_member_expression: number;
    export const RULE_parenthesized_operator: number;
    export const RULE_parenthesized_expression: number;
    export const RULE_tuple_expression: number;
    export const RULE_tuple_element_list: number;
    export const RULE_tuple_element: number;
    export const RULE_wildcard_expression: number;
    export const RULE_key_path_expression: number;
    export const RULE_key_path_components: number;
    export const RULE_key_path_component: number;
    export const RULE_key_path_postfixes: number;
    export const RULE_key_path_postfix: number;
    export const RULE_selector_expression: number;
    export const RULE_key_path_string_expression: number;
    export const RULE_postfix_expression: number;
    export const RULE_function_call_suffix: number;
    export const RULE_initializer_suffix: number;
    export const RULE_explicit_member_suffix: number;
    export const RULE_postfix_self_suffix: number;
    export const RULE_subscript_suffix: number;
    export const RULE_forced_value_suffix: number;
    export const RULE_optional_chaining_suffix: number;
    export const RULE_function_call_argument_clause: number;
    export const RULE_function_call_argument_list: number;
    export const RULE_function_call_argument: number;
    export const RULE_trailing_closures: number;
    export const RULE_labeled_trailing_closures: number;
    export const RULE_labeled_trailing_closure: number;
    export const RULE_argument_names: number;
    export const RULE_argument_name: number;
    export const RULE_type: number;
    export const RULE_type_annotation: number;
    export const RULE_type_identifier: number;
    export const RULE_type_name: number;
    export const RULE_tuple_type: number;
    export const RULE_tuple_type_element_list: number;
    export const RULE_tuple_type_element: number;
    export const RULE_element_name: number;
    export const RULE_function_type: number;
    export const RULE_function_type_argument_clause: number;
    export const RULE_function_type_argument_list: number;
    export const RULE_function_type_argument: number;
    export const RULE_argument_label: number;
    export const RULE_array_type: number;
    export const RULE_dictionary_type: number;
    export const RULE_protocol_composition_type: number;
    export const RULE_trailing_composition_and: number;
    export const RULE_opaque_type: number;
    export const RULE_any_type: number;
    export const RULE_self_type: number;
    export const RULE_type_inheritance_clause: number;
    export const RULE_type_inheritance_list: number;
    export const RULE_identifier: number;
    export const RULE_identifier_list: number;
    export const RULE_keyword: number;
    export const RULE_assignment_operator: number;
    export const RULE_negate_prefix_operator: number;
    export const RULE_compilation_condition_AND: number;
    export const RULE_compilation_condition_OR: number;
    export const RULE_compilation_condition_GE: number;
    export const RULE_compilation_condition_L: number;
    export const RULE_arrow_operator: number;
    export const RULE_range_operator: number;
    export const RULE_same_type_equals: number;
    export const RULE_binary_operator: number;
    export const RULE_prefix_operator: number;
    export const RULE_postfix_operator: number;
    export const RULE_operator: number;
    export const RULE_operator_head: number;
    export const RULE_operator_character: number;
    export const RULE_operator_characters: number;
    export const RULE_dot_operator_head: number;
    export const RULE_dot_operator_character: number;
    export const RULE_dot_operator_characters: number;
    export const RULE_literal: number;
    export const RULE_numeric_literal: number;
    export const RULE_boolean_literal: number;
    export const RULE_nil_literal: number;
    export const RULE_integer_literal: number;
    export const RULE_string_literal: number;
    export const RULE_extended_string_literal: number;
    export const RULE_static_string_literal: number;
    export const RULE_interpolated_string_literal: number;
    export { Self_initializer_expressionContext };
    export { Self_pure_expressionContext };
    export { Self_subscript_expressionContext };
    export { Self_method_expressionContext };
    export { Superclass_subscript_expressionContext };
    export { Superclass_initializer_expressionContext };
    export { Superclass_method_expressionContext };
    export { Top_levelContext };
    export { StatementContext };
    export { StatementsContext };
    export { Loop_statementContext };
    export { For_in_statementContext };
    export { While_statementContext };
    export { Condition_listContext };
    export { ConditionContext };
    export { Case_conditionContext };
    export { Optional_binding_conditionContext };
    export { Repeat_while_statementContext };
    export { Branch_statementContext };
    export { If_statementContext };
    export { Else_clauseContext };
    export { Guard_statementContext };
    export { Switch_statementContext };
    export { Switch_casesContext };
    export { Switch_caseContext };
    export { Case_labelContext };
    export { Case_item_listContext };
    export { Default_labelContext };
    export { Where_clauseContext };
    export { Where_expressionContext };
    export { Conditional_switch_caseContext };
    export { Switch_if_directive_clauseContext };
    export { Switch_elseif_directive_clausesContext };
    export { Switch_elseif_directive_clauseContext };
    export { Switch_else_directive_clauseContext };
    export { Labeled_statementContext };
    export { Statement_labelContext };
    export { Label_nameContext };
    export { Control_transfer_statementContext };
    export { Break_statementContext };
    export { Continue_statementContext };
    export { Fallthrough_statementContext };
    export { Return_statementContext };
    export { Throw_statementContext };
    export { Defer_statementContext };
    export { Do_statementContext };
    export { Catch_clausesContext };
    export { Catch_clauseContext };
    export { Catch_pattern_listContext };
    export { Catch_patternContext };
    export { Compiler_control_statementContext };
    export { Conditional_compilation_blockContext };
    export { If_directive_clauseContext };
    export { Elseif_directive_clausesContext };
    export { Elseif_directive_clauseContext };
    export { Else_directive_clauseContext };
    export { Compilation_conditionContext };
    export { Platform_conditionContext };
    export { Swift_versionContext };
    export { Swift_version_continuationContext };
    export { Operating_systemContext };
    export { ArchitectureContext };
    export { Module_nameContext };
    export { EnvironmentContext };
    export { Line_control_statementContext };
    export { Line_numberContext };
    export { File_nameContext };
    export { Diagnostic_statementContext };
    export { Diagnostic_messageContext };
    export { Availability_conditionContext };
    export { Availability_argumentsContext };
    export { Availability_argumentContext };
    export { Platform_nameContext };
    export { Platform_versionContext };
    export { Generic_parameter_clauseContext };
    export { Generic_parameter_listContext };
    export { Generic_parameterContext };
    export { Generic_where_clauseContext };
    export { Requirement_listContext };
    export { RequirementContext };
    export { Conformance_requirementContext };
    export { Same_type_requirementContext };
    export { Generic_argument_clauseContext };
    export { Generic_argument_listContext };
    export { Generic_argumentContext };
    export { DeclarationContext };
    export { DeclarationsContext };
    export { Top_level_declarationContext };
    export { Code_blockContext };
    export { Import_declarationContext };
    export { Import_kindContext };
    export { Import_pathContext };
    export { Import_path_identifierContext };
    export { Constant_declarationContext };
    export { Pattern_initializer_listContext };
    export { Pattern_initializerContext };
    export { InitializerContext };
    export { Variable_declarationContext };
    export { Variable_declaration_headContext };
    export { Variable_nameContext };
    export { Getter_setter_blockContext };
    export { Getter_clauseContext };
    export { Setter_clauseContext };
    export { Setter_nameContext };
    export { Getter_setter_keyword_blockContext };
    export { Getter_keyword_clauseContext };
    export { Setter_keyword_clauseContext };
    export { WillSet_didSet_blockContext };
    export { WillSet_clauseContext };
    export { DidSet_clauseContext };
    export { Typealias_declarationContext };
    export { Typealias_nameContext };
    export { Typealias_assignmentContext };
    export { Function_declarationContext };
    export { Function_headContext };
    export { Function_nameContext };
    export { Function_signatureContext };
    export { Function_resultContext };
    export { Function_bodyContext };
    export { Parameter_clauseContext };
    export { Parameter_listContext };
    export { ParameterContext };
    export { External_parameter_nameContext };
    export { Local_parameter_nameContext };
    export { Default_argument_clauseContext };
    export { Enum_declarationContext };
    export { Union_style_enumContext };
    export { Union_style_enum_membersContext };
    export { Union_style_enum_memberContext };
    export { Union_style_enum_case_clauseContext };
    export { Union_style_enum_case_listContext };
    export { Union_style_enum_caseContext };
    export { Enum_nameContext };
    export { Enum_case_nameContext };
    export { Raw_value_style_enumContext };
    export { Raw_value_style_enum_membersContext };
    export { Raw_value_style_enum_memberContext };
    export { Raw_value_style_enum_case_clauseContext };
    export { Raw_value_style_enum_case_listContext };
    export { Raw_value_style_enum_caseContext };
    export { Raw_value_assignmentContext };
    export { Raw_value_literalContext };
    export { Struct_declarationContext };
    export { Struct_nameContext };
    export { Struct_bodyContext };
    export { Struct_membersContext };
    export { Struct_memberContext };
    export { Class_declarationContext };
    export { Class_nameContext };
    export { Class_bodyContext };
    export { Class_membersContext };
    export { Class_memberContext };
    export { Protocol_declarationContext };
    export { Protocol_nameContext };
    export { Protocol_bodyContext };
    export { Protocol_membersContext };
    export { Protocol_memberContext };
    export { Protocol_member_declarationContext };
    export { Protocol_property_declarationContext };
    export { Protocol_method_declarationContext };
    export { Protocol_initializer_declarationContext };
    export { Protocol_subscript_declarationContext };
    export { Protocol_associated_type_declarationContext };
    export { Initializer_declarationContext };
    export { Initializer_headContext };
    export { Initializer_bodyContext };
    export { Deinitializer_declarationContext };
    export { Extension_declarationContext };
    export { Extension_bodyContext };
    export { Extension_membersContext };
    export { Extension_memberContext };
    export { Subscript_declarationContext };
    export { Subscript_headContext };
    export { Subscript_resultContext };
    export { Operator_declarationContext };
    export { Prefix_operator_declarationContext };
    export { Postfix_operator_declarationContext };
    export { Infix_operator_declarationContext };
    export { Infix_operator_groupContext };
    export { Precedence_group_declarationContext };
    export { Precedence_group_attributesContext };
    export { Precedence_group_attributeContext };
    export { Precedence_group_relationContext };
    export { Precedence_group_assignmentContext };
    export { Precedence_group_associativityContext };
    export { Precedence_group_namesContext };
    export { Precedence_group_nameContext };
    export { Declaration_modifierContext };
    export { Declaration_modifiersContext };
    export { Access_level_modifierContext };
    export { Mutation_modifierContext };
    export { PatternContext };
    export { Wildcard_patternContext };
    export { Identifier_patternContext };
    export { Value_binding_patternContext };
    export { Tuple_patternContext };
    export { Tuple_pattern_element_listContext };
    export { Tuple_pattern_elementContext };
    export { Enum_case_patternContext };
    export { Optional_patternContext };
    export { Expression_patternContext };
    export { AttributeContext };
    export { Attribute_nameContext };
    export { Attribute_argument_clauseContext };
    export { AttributesContext };
    export { Balanced_tokensContext };
    export { Balanced_tokenContext };
    export { Balanced_token_punctuationContext };
    export { ExpressionContext };
    export { Expression_listContext };
    export { Prefix_expressionContext };
    export { In_out_expressionContext };
    export { Try_operatorContext };
    export { Binary_expressionContext };
    export { Binary_expressionsContext };
    export { Conditional_operatorContext };
    export { Type_casting_operatorContext };
    export { Primary_expressionContext };
    export { Unqualified_nameContext };
    export { Literal_expressionContext };
    export { Array_literalContext };
    export { Array_literal_itemsContext };
    export { Array_literal_itemContext };
    export { Dictionary_literalContext };
    export { Dictionary_literal_itemsContext };
    export { Dictionary_literal_itemContext };
    export { Playground_literalContext };
    export { Self_expressionContext };
    export { Superclass_expressionContext };
    export { Closure_expressionContext };
    export { Closure_signatureContext };
    export { Closure_parameter_clauseContext };
    export { Closure_parameter_listContext };
    export { Closure_parameterContext };
    export { Capture_listContext };
    export { Capture_list_itemsContext };
    export { Capture_list_itemContext };
    export { Capture_specifierContext };
    export { Implicit_member_expressionContext };
    export { Parenthesized_operatorContext };
    export { Parenthesized_expressionContext };
    export { Tuple_expressionContext };
    export { Tuple_element_listContext };
    export { Tuple_elementContext };
    export { Wildcard_expressionContext };
    export { Key_path_expressionContext };
    export { Key_path_componentsContext };
    export { Key_path_componentContext };
    export { Key_path_postfixesContext };
    export { Key_path_postfixContext };
    export { Selector_expressionContext };
    export { Key_path_string_expressionContext };
    export { Postfix_expressionContext };
    export { Function_call_suffixContext };
    export { Initializer_suffixContext };
    export { Explicit_member_suffixContext };
    export { Postfix_self_suffixContext };
    export { Subscript_suffixContext };
    export { Forced_value_suffixContext };
    export { Optional_chaining_suffixContext };
    export { Function_call_argument_clauseContext };
    export { Function_call_argument_listContext };
    export { Function_call_argumentContext };
    export { Trailing_closuresContext };
    export { Labeled_trailing_closuresContext };
    export { Labeled_trailing_closureContext };
    export { Argument_namesContext };
    export { Argument_nameContext };
    export { TypeContext };
    export { Type_annotationContext };
    export { Type_identifierContext };
    export { Type_nameContext };
    export { Tuple_typeContext };
    export { Tuple_type_element_listContext };
    export { Tuple_type_elementContext };
    export { Element_nameContext };
    export { Function_typeContext };
    export { Function_type_argument_clauseContext };
    export { Function_type_argument_listContext };
    export { Function_type_argumentContext };
    export { Argument_labelContext };
    export { Array_typeContext };
    export { Dictionary_typeContext };
    export { Protocol_composition_typeContext };
    export { Trailing_composition_andContext };
    export { Opaque_typeContext };
    export { Any_typeContext };
    export { Self_typeContext };
    export { Type_inheritance_clauseContext };
    export { Type_inheritance_listContext };
    export { IdentifierContext };
    export { Identifier_listContext };
    export { KeywordContext };
    export { Assignment_operatorContext };
    export { Negate_prefix_operatorContext };
    export { Compilation_condition_ANDContext };
    export { Compilation_condition_ORContext };
    export { Compilation_condition_GEContext };
    export { Compilation_condition_LContext };
    export { Arrow_operatorContext };
    export { Range_operatorContext };
    export { Same_type_equalsContext };
    export { Binary_operatorContext };
    export { Prefix_operatorContext };
    export { Postfix_operatorContext };
    export { OperatorContext };
    export { Operator_headContext };
    export { Operator_characterContext };
    export { Operator_charactersContext };
    export { Dot_operator_headContext };
    export { Dot_operator_characterContext };
    export { Dot_operator_charactersContext };
    export { LiteralContext };
    export { Numeric_literalContext };
    export { Boolean_literalContext };
    export { Nil_literalContext };
    export { Integer_literalContext };
    export { String_literalContext };
    export { Extended_string_literalContext };
    export { Static_string_literalContext };
    export { Interpolated_string_literalContext };
}
export default Swift5Parser;
declare class Top_levelContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EOF(): any;
    statements(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class StatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    loop_statement(): any;
    declaration(): any;
    branch_statement(): any;
    labeled_statement(): any;
    control_transfer_statement(): any;
    defer_statement(): any;
    do_statement(): any;
    expression(): any;
    SEMI(): any;
    compiler_control_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class StatementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    indexBefore: number;
    statement: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Loop_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    for_in_statement(): any;
    while_statement(): any;
    repeat_while_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class For_in_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FOR(): any;
    pattern(): any;
    IN(): any;
    expression(): any;
    code_block(): any;
    CASE(): any;
    where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class While_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WHILE(): any;
    condition_list(): any;
    code_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Condition_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    condition: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ConditionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    availability_condition(): any;
    expression(): any;
    case_condition(): any;
    optional_binding_condition(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Case_conditionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CASE(): any;
    pattern(): any;
    initializer(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Optional_binding_conditionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pattern(): any;
    initializer(): any;
    LET(): any;
    VAR(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Repeat_while_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    REPEAT(): any;
    code_block(): any;
    WHILE(): any;
    expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Branch_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    if_statement(): any;
    guard_statement(): any;
    switch_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class If_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IF(): any;
    condition_list(): any;
    code_block(): any;
    else_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Else_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ELSE(): any;
    code_block(): any;
    if_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Guard_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    GUARD(): any;
    condition_list(): any;
    ELSE(): any;
    code_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Switch_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SWITCH(): any;
    expression(): any;
    LCURLY(): any;
    RCURLY(): any;
    switch_cases(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Switch_casesContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    switch_case(): any;
    switch_cases(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Switch_caseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    statements(): any;
    case_label(): any;
    default_label(): any;
    conditional_switch_case(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Case_labelContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CASE(): any;
    case_item_list(): any;
    COLON(): any;
    attributes(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Case_item_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pattern: (i: any) => any;
    where_clause: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Default_labelContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DEFAULT(): any;
    COLON(): any;
    attributes(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Where_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WHERE(): any;
    where_expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Where_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Conditional_switch_caseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    switch_if_directive_clause(): any;
    HASH_ENDIF(): any;
    switch_elseif_directive_clauses(): any;
    switch_else_directive_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Switch_if_directive_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HASH_IF(): any;
    compilation_condition(): any;
    switch_cases(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Switch_elseif_directive_clausesContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    elseif_directive_clause(): any;
    switch_elseif_directive_clauses(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Switch_elseif_directive_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HASH_ELSEIF(): any;
    compilation_condition(): any;
    switch_cases(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Switch_else_directive_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HASH_ELSE(): any;
    switch_cases(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Labeled_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    statement_label(): any;
    loop_statement(): any;
    if_statement(): any;
    switch_statement(): any;
    do_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Statement_labelContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    label_name(): any;
    COLON(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Label_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Control_transfer_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    break_statement(): any;
    continue_statement(): any;
    fallthrough_statement(): any;
    return_statement(): any;
    throw_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Break_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    BREAK(): any;
    label_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Continue_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CONTINUE(): any;
    label_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Fallthrough_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FALLTHROUGH(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Return_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    RETURN(): any;
    expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Throw_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    THROW(): any;
    expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Defer_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DEFER(): any;
    code_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Do_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DO(): any;
    code_block(): any;
    catch_clauses(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Catch_clausesContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    catch_clause: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Catch_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CATCH(): any;
    code_block(): any;
    catch_pattern_list(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Catch_pattern_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    catch_pattern: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Catch_patternContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pattern(): any;
    where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Compiler_control_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    conditional_compilation_block(): any;
    line_control_statement(): any;
    diagnostic_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Conditional_compilation_blockContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    if_directive_clause(): any;
    HASH_ENDIF(): any;
    elseif_directive_clauses(): any;
    else_directive_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class If_directive_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HASH_IF(): any;
    compilation_condition(): any;
    statements(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Elseif_directive_clausesContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    elseif_directive_clause: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Elseif_directive_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HASH_ELSEIF(): any;
    compilation_condition(): any;
    statements(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Else_directive_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HASH_ELSE(): any;
    statements(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Compilation_conditionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    platform_condition(): any;
    identifier(): any;
    boolean_literal(): any;
    LPAREN(): any;
    compilation_condition: (i: any) => any;
    RPAREN(): any;
    BANG(): any;
    compilation_condition_AND(): any;
    compilation_condition_OR(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Platform_conditionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    OS(): any;
    LPAREN(): any;
    operating_system(): any;
    RPAREN(): any;
    ARCH(): any;
    architecture(): any;
    swift_version(): any;
    SWIFT(): any;
    COMPILER(): any;
    compilation_condition_GE(): any;
    compilation_condition_L(): any;
    CAN_IMPORT(): any;
    module_name(): any;
    TARGET_ENVIRONMENT(): any;
    environment(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Swift_versionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Decimal_digits(): any;
    swift_version_continuation(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Swift_version_continuationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT(): any;
    Decimal_digits(): any;
    swift_version_continuation(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Operating_systemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    MAC_OS(): any;
    I_OS(): any;
    OSX(): any;
    WATCH_OS(): any;
    TV_OS(): any;
    LINUX(): any;
    WINDOWS(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ArchitectureContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    I386(): any;
    X86_64(): any;
    ARM(): any;
    ARM64(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Module_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    DOT: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class EnvironmentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SIMULATOR(): any;
    MAC_CATALYST(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Line_control_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SOURCE_LOCATION(): any;
    LPAREN(): any;
    RPAREN(): any;
    FILE(): any;
    COLON: (i: any) => any;
    file_name(): any;
    COMMA(): any;
    LINE(): any;
    line_number(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Line_numberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Decimal_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class File_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    static_string_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Diagnostic_statementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    diagnostic_message(): any;
    RPAREN(): any;
    ERROR(): any;
    WARNING(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Diagnostic_messageContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    static_string_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Availability_conditionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AVAILABLE(): any;
    LPAREN(): any;
    availability_arguments(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Availability_argumentsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    availability_argument: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Availability_argumentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    platform_name(): any;
    platform_version(): any;
    MUL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Platform_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    I_OS(): any;
    OSX(): any;
    I_OS_APPLICATION_EXTENSION(): any;
    MAC_OS(): any;
    MAC_OS_APPLICATION_EXTENSION(): any;
    MAC_CATALYST(): any;
    MAC_CATALYST_APPLICATION_EXTENSION(): any;
    WATCH_OS(): any;
    TV_OS(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Platform_versionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Decimal_literal(): any;
    Decimal_digits(): any;
    Floating_point_literal(): any;
    DOT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Generic_parameter_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LT(): any;
    generic_parameter_list(): any;
    GT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Generic_parameter_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    generic_parameter: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Generic_parameterContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type_name(): any;
    COLON(): any;
    type_identifier(): any;
    protocol_composition_type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Generic_where_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WHERE(): any;
    requirement_list(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Requirement_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    requirement: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class RequirementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    conformance_requirement(): any;
    same_type_requirement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Conformance_requirementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type_identifier: (i: any) => any;
    COLON(): any;
    protocol_composition_type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Same_type_requirementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type_identifier: (i: any) => any;
    same_type_equals(): any;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Generic_argument_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LT(): any;
    generic_argument_list(): any;
    GT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Generic_argument_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    generic_argument: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Generic_argumentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class DeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    import_declaration(): any;
    constant_declaration(): any;
    variable_declaration(): any;
    typealias_declaration(): any;
    function_declaration(): any;
    enum_declaration(): any;
    struct_declaration(): any;
    class_declaration(): any;
    protocol_declaration(): any;
    initializer_declaration(): any;
    deinitializer_declaration(): any;
    extension_declaration(): any;
    subscript_declaration(): any;
    operator_declaration(): any;
    precedence_group_declaration(): any;
    SEMI(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class DeclarationsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    declaration: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Top_level_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    statements(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Code_blockContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LCURLY(): any;
    RCURLY(): any;
    statements(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Import_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IMPORT(): any;
    import_path(): any;
    attributes(): any;
    import_kind(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Import_kindContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TYPEALIAS(): any;
    STRUCT(): any;
    CLASS(): any;
    ENUM(): any;
    PROTOCOL(): any;
    LET(): any;
    VAR(): any;
    FUNC(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Import_pathContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    import_path_identifier: (i: any) => any;
    DOT: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Import_path_identifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Constant_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LET(): any;
    pattern_initializer_list(): any;
    attributes(): any;
    declaration_modifiers(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Pattern_initializer_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pattern_initializer: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Pattern_initializerContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pattern(): any;
    initializer(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class InitializerContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EQUAL(): any;
    expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Variable_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    variable_declaration_head(): any;
    variable_name(): any;
    pattern_initializer_list(): any;
    initializer(): any;
    willSet_didSet_block(): any;
    type_annotation(): any;
    getter_setter_block(): any;
    getter_setter_keyword_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Variable_declaration_headContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    VAR(): any;
    attributes(): any;
    declaration_modifiers(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Variable_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Getter_setter_blockContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LCURLY(): any;
    RCURLY(): any;
    getter_clause(): any;
    setter_clause(): any;
    code_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Getter_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    GET(): any;
    attributes(): any;
    mutation_modifier(): any;
    code_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Setter_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SET(): any;
    attributes(): any;
    mutation_modifier(): any;
    setter_name(): any;
    code_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Setter_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Getter_setter_keyword_blockContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LCURLY(): any;
    RCURLY(): any;
    getter_keyword_clause(): any;
    setter_keyword_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Getter_keyword_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    GET(): any;
    attributes(): any;
    mutation_modifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Setter_keyword_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SET(): any;
    attributes(): any;
    mutation_modifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class WillSet_didSet_blockContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LCURLY(): any;
    RCURLY(): any;
    willSet_clause(): any;
    didSet_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class WillSet_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WILL_SET(): any;
    code_block(): any;
    attributes(): any;
    setter_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class DidSet_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DID_SET(): any;
    code_block(): any;
    attributes(): any;
    setter_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Typealias_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TYPEALIAS(): any;
    typealias_name(): any;
    typealias_assignment(): any;
    attributes(): any;
    access_level_modifier(): any;
    generic_parameter_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Typealias_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Typealias_assignmentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EQUAL(): any;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    function_head(): any;
    function_name(): any;
    function_signature(): any;
    generic_parameter_clause(): any;
    generic_where_clause(): any;
    function_body(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_headContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FUNC(): any;
    attributes(): any;
    declaration_modifiers(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_signatureContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    parameter_clause(): any;
    RETHROWS(): any;
    function_result(): any;
    THROWS(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_resultContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    arrow_operator(): any;
    type(): any;
    attributes(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_bodyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    code_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Parameter_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    RPAREN(): any;
    parameter_list(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Parameter_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    parameter: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ParameterContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    local_parameter_name(): any;
    type_annotation(): any;
    range_operator(): any;
    attributes(): any;
    external_parameter_name(): any;
    default_argument_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class External_parameter_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Local_parameter_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Default_argument_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EQUAL(): any;
    expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Enum_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    union_style_enum(): any;
    raw_value_style_enum(): any;
    attributes(): any;
    access_level_modifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Union_style_enumContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ENUM(): any;
    enum_name(): any;
    LCURLY(): any;
    RCURLY(): any;
    INDIRECT(): any;
    generic_parameter_clause(): any;
    type_inheritance_clause(): any;
    generic_where_clause(): any;
    union_style_enum_members(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Union_style_enum_membersContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    union_style_enum_member: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Union_style_enum_memberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    declaration(): any;
    union_style_enum_case_clause(): any;
    compiler_control_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Union_style_enum_case_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CASE(): any;
    union_style_enum_case_list(): any;
    attributes(): any;
    INDIRECT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Union_style_enum_case_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    union_style_enum_case: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Union_style_enum_caseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    opaque_type(): any;
    enum_case_name(): any;
    tuple_type(): any;
    LPAREN(): any;
    type(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Enum_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Enum_case_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Raw_value_style_enumContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ENUM(): any;
    enum_name(): any;
    type_inheritance_clause(): any;
    LCURLY(): any;
    raw_value_style_enum_members(): any;
    RCURLY(): any;
    generic_parameter_clause(): any;
    generic_where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Raw_value_style_enum_membersContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    raw_value_style_enum_member: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Raw_value_style_enum_memberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    declaration(): any;
    raw_value_style_enum_case_clause(): any;
    compiler_control_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Raw_value_style_enum_case_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CASE(): any;
    raw_value_style_enum_case_list(): any;
    attributes(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Raw_value_style_enum_case_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    raw_value_style_enum_case: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Raw_value_style_enum_caseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enum_case_name(): any;
    raw_value_assignment(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Raw_value_assignmentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EQUAL(): any;
    raw_value_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Raw_value_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    numeric_literal(): any;
    static_string_literal(): any;
    boolean_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Struct_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    STRUCT(): any;
    struct_name(): any;
    struct_body(): any;
    attributes(): any;
    access_level_modifier(): any;
    generic_parameter_clause(): any;
    type_inheritance_clause(): any;
    generic_where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Struct_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Struct_bodyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LCURLY(): any;
    struct_members(): any;
    RCURLY(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Struct_membersContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    struct_member: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Struct_memberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    declaration(): any;
    compiler_control_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Class_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CLASS(): any;
    class_name(): any;
    class_body(): any;
    FINAL(): any;
    attributes(): any;
    generic_parameter_clause(): any;
    type_inheritance_clause(): any;
    generic_where_clause(): any;
    access_level_modifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Class_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Class_bodyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LCURLY(): any;
    class_members(): any;
    RCURLY(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Class_membersContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    class_member: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Class_memberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    declaration(): any;
    compiler_control_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PROTOCOL(): any;
    protocol_name(): any;
    protocol_body(): any;
    attributes(): any;
    access_level_modifier(): any;
    COLON(): any;
    CLASS(): any;
    type_inheritance_clause(): any;
    generic_where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_bodyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LCURLY(): any;
    protocol_members(): any;
    RCURLY(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_membersContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    protocol_member: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_memberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    protocol_member_declaration(): any;
    compiler_control_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_member_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    protocol_property_declaration(): any;
    protocol_method_declaration(): any;
    protocol_initializer_declaration(): any;
    protocol_subscript_declaration(): any;
    protocol_associated_type_declaration(): any;
    typealias_declaration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_property_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    variable_declaration_head(): any;
    variable_name(): any;
    type_annotation(): any;
    getter_setter_keyword_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_method_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    function_head(): any;
    function_name(): any;
    function_signature(): any;
    generic_parameter_clause(): any;
    generic_where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_initializer_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    initializer_head(): any;
    parameter_clause(): any;
    RETHROWS(): any;
    generic_parameter_clause(): any;
    generic_where_clause(): any;
    THROWS(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_subscript_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    subscript_head(): any;
    subscript_result(): any;
    getter_setter_keyword_block(): any;
    generic_where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_associated_type_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ASSOCIATED_TYPE(): any;
    typealias_name(): any;
    attributes(): any;
    access_level_modifier(): any;
    type_inheritance_clause(): any;
    typealias_assignment(): any;
    generic_where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Initializer_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    initializer_head(): any;
    parameter_clause(): any;
    initializer_body(): any;
    generic_parameter_clause(): any;
    generic_where_clause(): any;
    THROWS(): any;
    RETHROWS(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Initializer_headContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    INIT(): any;
    attributes(): any;
    declaration_modifiers(): any;
    QUESTION(): any;
    BANG(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Initializer_bodyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    code_block(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Deinitializer_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DEINIT(): any;
    code_block(): any;
    attributes(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Extension_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EXTENSION(): any;
    type_identifier(): any;
    extension_body(): any;
    attributes(): any;
    access_level_modifier(): any;
    type_inheritance_clause(): any;
    generic_where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Extension_bodyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LCURLY(): any;
    extension_members(): any;
    RCURLY(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Extension_membersContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    extension_member: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Extension_memberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    declaration(): any;
    compiler_control_statement(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Subscript_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    subscript_head(): any;
    subscript_result(): any;
    code_block(): any;
    getter_setter_block(): any;
    getter_setter_keyword_block(): any;
    generic_where_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Subscript_headContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SUBSCRIPT(): any;
    parameter_clause(): any;
    attributes(): any;
    declaration_modifiers(): any;
    generic_parameter_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Subscript_resultContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    arrow_operator(): any;
    type(): any;
    attributes(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Operator_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    prefix_operator_declaration(): any;
    postfix_operator_declaration(): any;
    infix_operator_declaration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Prefix_operator_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PREFIX(): any;
    OPERATOR(): any;
    operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Postfix_operator_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    POSTFIX(): any;
    OPERATOR(): any;
    operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Infix_operator_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    INFIX(): any;
    OPERATOR(): any;
    operator(): any;
    infix_operator_group(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Infix_operator_groupContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COLON(): any;
    precedence_group_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Precedence_group_declarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PRECEDENCE_GROUP(): any;
    precedence_group_name(): any;
    LCURLY(): any;
    RCURLY(): any;
    precedence_group_attributes(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Precedence_group_attributesContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    precedence_group_attribute: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Precedence_group_attributeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    precedence_group_relation(): any;
    precedence_group_assignment(): any;
    precedence_group_associativity(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Precedence_group_relationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COLON(): any;
    precedence_group_names(): any;
    HIGHER_THAN(): any;
    LOWER_THAN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Precedence_group_assignmentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ASSIGNMENT(): any;
    COLON(): any;
    boolean_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Precedence_group_associativityContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ASSOCIATIVITY(): any;
    COLON(): any;
    LEFT(): any;
    RIGHT(): any;
    NONE(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Precedence_group_namesContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    precedence_group_name: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Precedence_group_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    DOT: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Declaration_modifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CLASS(): any;
    CONVENIENCE(): any;
    DYNAMIC(): any;
    FINAL(): any;
    INFIX(): any;
    LAZY(): any;
    OPTIONAL(): any;
    OVERRIDE(): any;
    POSTFIX(): any;
    PREFIX(): any;
    REQUIRED(): any;
    STATIC(): any;
    UNOWNED(): any;
    LPAREN(): any;
    RPAREN(): any;
    SAFE(): any;
    UNSAFE(): any;
    WEAK(): any;
    access_level_modifier(): any;
    mutation_modifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Declaration_modifiersContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    declaration_modifier: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Access_level_modifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PRIVATE(): any;
    FILE_PRIVATE(): any;
    INTERNAL(): any;
    PUBLIC(): any;
    OPEN(): any;
    LPAREN(): any;
    SET(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Mutation_modifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    MUTATING(): any;
    NONMUTATING(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class PatternContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    wildcard_pattern(): any;
    identifier_pattern(): any;
    tuple_pattern(): any;
    type_annotation(): any;
    value_binding_pattern(): any;
    enum_case_pattern(): any;
    optional_pattern(): any;
    IS(): any;
    type(): any;
    expression_pattern(): any;
    pattern(): any;
    AS(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Wildcard_patternContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    UNDERSCORE(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Identifier_patternContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Value_binding_patternContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    VAR(): any;
    pattern(): any;
    LET(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Tuple_patternContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    RPAREN(): any;
    tuple_pattern_element_list(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Tuple_pattern_element_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tuple_pattern_element: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Tuple_pattern_elementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pattern(): any;
    identifier(): any;
    COLON(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Enum_case_patternContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT(): any;
    enum_case_name(): any;
    type_identifier(): any;
    tuple_pattern(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Optional_patternContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier_pattern(): any;
    QUESTION(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Expression_patternContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class AttributeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AT(): any;
    attribute_name(): any;
    attribute_argument_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Attribute_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    DOT: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Attribute_argument_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    RPAREN(): any;
    balanced_tokens(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class AttributesContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    attribute: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Balanced_tokensContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    balanced_token: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Balanced_tokenContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    RPAREN(): any;
    balanced_tokens(): any;
    LBRACK(): any;
    RBRACK(): any;
    LCURLY(): any;
    RCURLY(): any;
    identifier(): any;
    keyword(): any;
    literal(): any;
    operator(): any;
    balanced_token_punctuation(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Balanced_token_punctuationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT(): any;
    COMMA(): any;
    COLON(): any;
    SEMI(): any;
    EQUAL(): any;
    AT(): any;
    HASH(): any;
    BACKTICK(): any;
    QUESTION(): any;
    arrow_operator(): any;
    AND(): any;
    BANG(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    prefix_expression(): any;
    try_operator(): any;
    binary_expressions(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Expression_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expression: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Prefix_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    postfix_expression(): any;
    prefix_operator(): any;
    in_out_expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class In_out_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AND(): any;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Try_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TRY(): any;
    QUESTION(): any;
    BANG(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Binary_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    binary_operator(): any;
    prefix_expression(): any;
    assignment_operator(): any;
    conditional_operator(): any;
    try_operator(): any;
    type_casting_operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Binary_expressionsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    binary_expression: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Conditional_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    QUESTION(): any;
    expression(): any;
    COLON(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Type_casting_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    IS(): any;
    AS(): any;
    QUESTION(): any;
    BANG(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Primary_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    unqualified_name(): any;
    generic_argument_clause(): any;
    array_type(): any;
    dictionary_type(): any;
    literal_expression(): any;
    self_expression(): any;
    superclass_expression(): any;
    closure_expression(): any;
    parenthesized_operator(): any;
    parenthesized_expression(): any;
    tuple_expression(): any;
    implicit_member_expression(): any;
    wildcard_expression(): any;
    key_path_expression(): any;
    selector_expression(): any;
    key_path_string_expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Unqualified_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    LPAREN(): any;
    argument_names(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Literal_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    literal(): any;
    array_literal(): any;
    dictionary_literal(): any;
    playground_literal(): any;
    HASH_FILE(): any;
    HASH_FILE_ID(): any;
    HASH_FILE_PATH(): any;
    HASH_LINE(): any;
    HASH_COLUMN(): any;
    HASH_FUNCTION(): any;
    HASH_DSO_HANDLE(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Array_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LBRACK(): any;
    RBRACK(): any;
    array_literal_items(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Array_literal_itemsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    array_literal_item: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Array_literal_itemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Dictionary_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LBRACK(): any;
    RBRACK(): any;
    dictionary_literal_items(): any;
    COLON(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Dictionary_literal_itemsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    dictionary_literal_item: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Dictionary_literal_itemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expression: (i: any) => any;
    COLON(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Playground_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HASH_COLOR_LITERAL(): any;
    LPAREN(): any;
    RED(): any;
    COLON: (i: any) => any;
    expression: (i: any) => any;
    COMMA: (i: any) => any;
    GREEN(): any;
    BLUE(): any;
    ALPHA(): any;
    RPAREN(): any;
    HASH_FILE_LITERAL(): any;
    RESOURCE_NAME(): any;
    HASH_IMAGE_LITERAL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Self_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    copyFrom(ctx: any): void;
}
declare class Superclass_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    copyFrom(ctx: any): void;
}
declare class Closure_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LCURLY(): any;
    RCURLY(): any;
    closure_signature(): any;
    statements(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Closure_signatureContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    closure_parameter_clause(): any;
    IN(): any;
    capture_list(): any;
    THROWS(): any;
    function_result(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Closure_parameter_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    RPAREN(): any;
    closure_parameter_list(): any;
    identifier_list(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Closure_parameter_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    closure_parameter: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Closure_parameterContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    closure_parameter_name: any;
    identifier(): any;
    type_annotation(): any;
    range_operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Capture_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LBRACK(): any;
    capture_list_items(): any;
    RBRACK(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Capture_list_itemsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    capture_list_item: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Capture_list_itemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    expression(): any;
    self_expression(): any;
    capture_specifier(): any;
    EQUAL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Capture_specifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WEAK(): any;
    UNOWNED(): any;
    LPAREN(): any;
    RPAREN(): any;
    SAFE(): any;
    UNSAFE(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Implicit_member_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT: (i: any) => any;
    identifier(): any;
    keyword(): any;
    postfix_expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Parenthesized_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    operator(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Parenthesized_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    expression(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Tuple_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    RPAREN(): any;
    tuple_element(): any;
    COMMA(): any;
    tuple_element_list(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Tuple_element_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tuple_element: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Tuple_elementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expression(): any;
    identifier(): any;
    COLON(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Wildcard_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    UNDERSCORE(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Key_path_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    BACKSLASH(): any;
    DOT(): any;
    key_path_components(): any;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Key_path_componentsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    key_path_component: (i: any) => any;
    DOT: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Key_path_componentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    key_path_postfixes(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Key_path_postfixesContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    key_path_postfix: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Key_path_postfixContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    QUESTION(): any;
    BANG(): any;
    SELF(): any;
    LBRACK(): any;
    function_call_argument_list(): any;
    RBRACK(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Selector_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HASH_SELECTOR(): any;
    LPAREN(): any;
    expression(): any;
    RPAREN(): any;
    COLON(): any;
    GETTER(): any;
    SETTER(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Key_path_string_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    HASH_KEYPATH(): any;
    LPAREN(): any;
    expression(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Postfix_expressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    primary_expression(): any;
    function_call_suffix: (i: any) => any;
    initializer_suffix: (i: any) => any;
    explicit_member_suffix: (i: any) => any;
    postfix_self_suffix: (i: any) => any;
    subscript_suffix: (i: any) => any;
    forced_value_suffix: (i: any) => any;
    optional_chaining_suffix: (i: any) => any;
    postfix_operator: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_call_suffixContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    trailing_closures(): any;
    function_call_argument_clause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Initializer_suffixContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT(): any;
    INIT(): any;
    LPAREN(): any;
    argument_names(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Explicit_member_suffixContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT(): any;
    Decimal_digits(): any;
    identifier(): any;
    generic_argument_clause(): any;
    LPAREN(): any;
    argument_names(): any;
    RPAREN(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Postfix_self_suffixContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT(): any;
    SELF(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Subscript_suffixContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LBRACK(): any;
    function_call_argument_list(): any;
    RBRACK(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Forced_value_suffixContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    BANG(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Optional_chaining_suffixContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    QUESTION(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_call_argument_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    RPAREN(): any;
    function_call_argument_list(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_call_argument_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    function_call_argument: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_call_argumentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    expression(): any;
    operator(): any;
    argument_name(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Trailing_closuresContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    closure_expression(): any;
    labeled_trailing_closures(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Labeled_trailing_closuresContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    labeled_trailing_closure: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Labeled_trailing_closureContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    COLON(): any;
    closure_expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Argument_namesContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    argument_name: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Argument_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    COLON(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    function_type(): any;
    array_type(): any;
    dictionary_type(): any;
    protocol_composition_type(): any;
    type_identifier(): any;
    tuple_type(): any;
    opaque_type(): any;
    any_type(): any;
    self_type(): any;
    LPAREN(): any;
    type(): any;
    RPAREN(): any;
    QUESTION(): any;
    BANG(): any;
    DOT(): any;
    TYPE(): any;
    PROTOCOL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Type_annotationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COLON(): any;
    type(): any;
    attributes(): any;
    INOUT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Type_identifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type_name(): any;
    generic_argument_clause(): any;
    DOT(): any;
    type_identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Type_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Tuple_typeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    RPAREN(): any;
    tuple_type_element_list(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Tuple_type_element_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tuple_type_element: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Tuple_type_elementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    element_name(): any;
    type_annotation(): any;
    type(): any;
    EQUAL(): any;
    expression(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Element_nameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_typeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    function_type_argument_clause(): any;
    arrow_operator(): any;
    type(): any;
    attributes(): any;
    THROWS(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_type_argument_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    RPAREN(): any;
    function_type_argument_list(): any;
    range_operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_type_argument_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    function_type_argument: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Function_type_argumentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    attributes(): any;
    INOUT(): any;
    argument_label(): any;
    type_annotation(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Argument_labelContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Array_typeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LBRACK(): any;
    type(): any;
    RBRACK(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Dictionary_typeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LBRACK(): any;
    type: (i: any) => any;
    COLON(): any;
    RBRACK(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Protocol_composition_typeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type_identifier: (i: any) => any;
    AND: (i: any) => any;
    trailing_composition_and(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Trailing_composition_andContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AND(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Opaque_typeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SOME(): any;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Any_typeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ANY(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Self_typeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SELF_BIG(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Type_inheritance_clauseContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COLON(): any;
    type_inheritance_list(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Type_inheritance_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type_identifier: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class IdentifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LINUX(): any;
    WINDOWS(): any;
    ALPHA(): any;
    ARCH(): any;
    ARM(): any;
    ARM64(): any;
    ASSIGNMENT(): any;
    BLUE(): any;
    CAN_IMPORT(): any;
    COMPILER(): any;
    FILE(): any;
    GREEN(): any;
    HIGHER_THAN(): any;
    I386(): any;
    I_OS(): any;
    OSX(): any;
    I_OS_APPLICATION_EXTENSION(): any;
    LINE(): any;
    LOWER_THAN(): any;
    MAC_CATALYST(): any;
    MAC_CATALYST_APPLICATION_EXTENSION(): any;
    MAC_OS(): any;
    MAC_OS_APPLICATION_EXTENSION(): any;
    OS(): any;
    PRECEDENCE_GROUP(): any;
    RED(): any;
    RESOURCE_NAME(): any;
    SAFE(): any;
    SIMULATOR(): any;
    SOME(): any;
    SWIFT(): any;
    TARGET_ENVIRONMENT(): any;
    TV_OS(): any;
    UNSAFE(): any;
    WATCH_OS(): any;
    X86_64(): any;
    ASSOCIATIVITY(): any;
    CONVENIENCE(): any;
    DYNAMIC(): any;
    DID_SET(): any;
    FINAL(): any;
    GET(): any;
    INFIX(): any;
    INDIRECT(): any;
    LAZY(): any;
    LEFT(): any;
    MUTATING(): any;
    NONE(): any;
    NONMUTATING(): any;
    OPTIONAL(): any;
    OVERRIDE(): any;
    POSTFIX(): any;
    PRECEDENCE(): any;
    PREFIX(): any;
    PROTOCOL(): any;
    REQUIRED(): any;
    RIGHT(): any;
    SET(): any;
    TYPE(): any;
    UNOWNED(): any;
    WEAK(): any;
    WILL_SET(): any;
    IN(): any;
    FOR(): any;
    GUARD(): any;
    WHERE(): any;
    DEFAULT(): any;
    INTERNAL(): any;
    PRIVATE(): any;
    PUBLIC(): any;
    OPEN(): any;
    AS(): any;
    WHILE(): any;
    SELF(): any;
    SELF_BIG(): any;
    CLASS(): any;
    GETTER(): any;
    SETTER(): any;
    OPERATOR(): any;
    DO(): any;
    CATCH(): any;
    Identifier(): any;
    BACKTICK: (i: any) => any;
    keyword(): any;
    DOLLAR(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Identifier_listContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class KeywordContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ASSOCIATED_TYPE(): any;
    CLASS(): any;
    DEINIT(): any;
    ENUM(): any;
    EXTENSION(): any;
    FILE_PRIVATE(): any;
    FUNC(): any;
    IMPORT(): any;
    INIT(): any;
    INOUT(): any;
    INTERNAL(): any;
    LET(): any;
    OPEN(): any;
    OPERATOR(): any;
    PRIVATE(): any;
    PROTOCOL(): any;
    PUBLIC(): any;
    RETHROWS(): any;
    STATIC(): any;
    STRUCT(): any;
    SUBSCRIPT(): any;
    TYPEALIAS(): any;
    VAR(): any;
    BREAK(): any;
    CASE(): any;
    CONTINUE(): any;
    DEFAULT(): any;
    DEFER(): any;
    DO(): any;
    ELSE(): any;
    FALLTHROUGH(): any;
    FOR(): any;
    GUARD(): any;
    IF(): any;
    IN(): any;
    REPEAT(): any;
    RETURN(): any;
    SWITCH(): any;
    WHERE(): any;
    WHILE(): any;
    AS(): any;
    ANY(): any;
    CATCH(): any;
    FALSE(): any;
    IS(): any;
    NIL(): any;
    SUPER(): any;
    SELF(): any;
    SELF_BIG(): any;
    THROW(): any;
    THROWS(): any;
    TRUE(): any;
    TRY(): any;
    UNDERSCORE(): any;
    AVAILABLE(): any;
    HASH_COLOR_LITERAL(): any;
    HASH_COLUMN(): any;
    HASH_ELSE(): any;
    HASH_ELSEIF(): any;
    HASH_ENDIF(): any;
    ERROR(): any;
    HASH_FILE(): any;
    HASH_FILE_ID(): any;
    HASH_FILE_LITERAL(): any;
    HASH_FILE_PATH(): any;
    HASH_FUNCTION(): any;
    HASH_IF(): any;
    HASH_IMAGE_LITERAL(): any;
    HASH_LINE(): any;
    HASH_SELECTOR(): any;
    SOURCE_LOCATION(): any;
    WARNING(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Assignment_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EQUAL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Negate_prefix_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SUB(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Compilation_condition_ANDContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AND: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Compilation_condition_ORContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    OR: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Compilation_condition_GEContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    GT(): any;
    EQUAL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Compilation_condition_LContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Arrow_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SUB(): any;
    GT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Range_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Same_type_equalsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EQUAL: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Binary_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Prefix_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Postfix_operatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    operator(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class OperatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    operator_head(): any;
    operator_characters(): any;
    dot_operator_head(): any;
    dot_operator_characters(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Operator_headContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DIV(): any;
    EQUAL(): any;
    SUB(): any;
    ADD(): any;
    BANG(): any;
    MUL(): any;
    MOD(): any;
    AND(): any;
    OR(): any;
    LT(): any;
    GT(): any;
    CARET(): any;
    TILDE(): any;
    QUESTION(): any;
    Operator_head_other(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Operator_characterContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    operator_head(): any;
    Operator_following_character(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Operator_charactersContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    operator_character: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Dot_operator_headContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Dot_operator_characterContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT(): any;
    operator_character(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Dot_operator_charactersContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    dot_operator_character: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class LiteralContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    numeric_literal(): any;
    string_literal(): any;
    boolean_literal(): any;
    nil_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Numeric_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    integer_literal(): any;
    negate_prefix_operator(): any;
    Floating_point_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Boolean_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TRUE(): any;
    FALSE(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Nil_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    NIL(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Integer_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Decimal_digits(): any;
    Decimal_literal(): any;
    Binary_literal(): any;
    Octal_literal(): any;
    Hexadecimal_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class String_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    extended_string_literal(): any;
    interpolated_string_literal(): any;
    static_string_literal(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Extended_string_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Multi_line_extended_string_open(): any;
    Multi_line_extended_string_close(): any;
    Quoted_multi_line_extended_text: (i: any) => any;
    Single_line_extended_string_open(): any;
    Single_line_extended_string_close(): any;
    Quoted_single_line_extended_text: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Static_string_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Single_line_string_open(): any;
    Single_line_string_close(): any;
    Quoted_single_line_text: (i: any) => any;
    Multi_line_string_open(): any;
    Multi_line_string_close(): any;
    Quoted_multi_line_text: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Interpolated_string_literalContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Single_line_string_open(): any;
    Single_line_string_close(): any;
    Quoted_single_line_text: (i: any) => any;
    Interpolataion_single_line: (i: any) => any;
    RPAREN: (i: any) => any;
    expression: (i: any) => any;
    tuple_element: (i: any) => any;
    COMMA: (i: any) => any;
    tuple_element_list: (i: any) => any;
    Multi_line_string_open(): any;
    Multi_line_string_close(): any;
    Quoted_multi_line_text: (i: any) => any;
    Interpolataion_multi_line: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Self_initializer_expressionContext extends Self_expressionContext {
    constructor(parser: any, ctx: any);
    SELF(): any;
    DOT(): any;
    INIT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Self_pure_expressionContext extends Self_expressionContext {
    constructor(parser: any, ctx: any);
    SELF(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Self_subscript_expressionContext extends Self_expressionContext {
    constructor(parser: any, ctx: any);
    SELF(): any;
    LBRACK(): any;
    function_call_argument_list(): any;
    RBRACK(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Self_method_expressionContext extends Self_expressionContext {
    constructor(parser: any, ctx: any);
    SELF(): any;
    DOT(): any;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Superclass_subscript_expressionContext extends Superclass_expressionContext {
    constructor(parser: any, ctx: any);
    SUPER(): any;
    LBRACK(): any;
    function_call_argument_list(): any;
    RBRACK(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Superclass_initializer_expressionContext extends Superclass_expressionContext {
    constructor(parser: any, ctx: any);
    SUPER(): any;
    DOT(): any;
    INIT(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class Superclass_method_expressionContext extends Superclass_expressionContext {
    constructor(parser: any, ctx: any);
    SUPER(): any;
    DOT(): any;
    identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
