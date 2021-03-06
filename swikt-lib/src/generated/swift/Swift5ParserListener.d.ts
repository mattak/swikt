export default class Swift5ParserListener {
    enterTop_level(ctx: any): void;
    exitTop_level(ctx: any): void;
    enterStatement(ctx: any): void;
    exitStatement(ctx: any): void;
    enterStatements(ctx: any): void;
    exitStatements(ctx: any): void;
    enterLoop_statement(ctx: any): void;
    exitLoop_statement(ctx: any): void;
    enterFor_in_statement(ctx: any): void;
    exitFor_in_statement(ctx: any): void;
    enterWhile_statement(ctx: any): void;
    exitWhile_statement(ctx: any): void;
    enterCondition_list(ctx: any): void;
    exitCondition_list(ctx: any): void;
    enterCondition(ctx: any): void;
    exitCondition(ctx: any): void;
    enterCase_condition(ctx: any): void;
    exitCase_condition(ctx: any): void;
    enterOptional_binding_condition(ctx: any): void;
    exitOptional_binding_condition(ctx: any): void;
    enterRepeat_while_statement(ctx: any): void;
    exitRepeat_while_statement(ctx: any): void;
    enterBranch_statement(ctx: any): void;
    exitBranch_statement(ctx: any): void;
    enterIf_statement(ctx: any): void;
    exitIf_statement(ctx: any): void;
    enterElse_clause(ctx: any): void;
    exitElse_clause(ctx: any): void;
    enterGuard_statement(ctx: any): void;
    exitGuard_statement(ctx: any): void;
    enterSwitch_statement(ctx: any): void;
    exitSwitch_statement(ctx: any): void;
    enterSwitch_cases(ctx: any): void;
    exitSwitch_cases(ctx: any): void;
    enterSwitch_case(ctx: any): void;
    exitSwitch_case(ctx: any): void;
    enterCase_label(ctx: any): void;
    exitCase_label(ctx: any): void;
    enterCase_item_list(ctx: any): void;
    exitCase_item_list(ctx: any): void;
    enterDefault_label(ctx: any): void;
    exitDefault_label(ctx: any): void;
    enterWhere_clause(ctx: any): void;
    exitWhere_clause(ctx: any): void;
    enterWhere_expression(ctx: any): void;
    exitWhere_expression(ctx: any): void;
    enterConditional_switch_case(ctx: any): void;
    exitConditional_switch_case(ctx: any): void;
    enterSwitch_if_directive_clause(ctx: any): void;
    exitSwitch_if_directive_clause(ctx: any): void;
    enterSwitch_elseif_directive_clauses(ctx: any): void;
    exitSwitch_elseif_directive_clauses(ctx: any): void;
    enterSwitch_elseif_directive_clause(ctx: any): void;
    exitSwitch_elseif_directive_clause(ctx: any): void;
    enterSwitch_else_directive_clause(ctx: any): void;
    exitSwitch_else_directive_clause(ctx: any): void;
    enterLabeled_statement(ctx: any): void;
    exitLabeled_statement(ctx: any): void;
    enterStatement_label(ctx: any): void;
    exitStatement_label(ctx: any): void;
    enterLabel_name(ctx: any): void;
    exitLabel_name(ctx: any): void;
    enterControl_transfer_statement(ctx: any): void;
    exitControl_transfer_statement(ctx: any): void;
    enterBreak_statement(ctx: any): void;
    exitBreak_statement(ctx: any): void;
    enterContinue_statement(ctx: any): void;
    exitContinue_statement(ctx: any): void;
    enterFallthrough_statement(ctx: any): void;
    exitFallthrough_statement(ctx: any): void;
    enterReturn_statement(ctx: any): void;
    exitReturn_statement(ctx: any): void;
    enterThrow_statement(ctx: any): void;
    exitThrow_statement(ctx: any): void;
    enterDefer_statement(ctx: any): void;
    exitDefer_statement(ctx: any): void;
    enterDo_statement(ctx: any): void;
    exitDo_statement(ctx: any): void;
    enterCatch_clauses(ctx: any): void;
    exitCatch_clauses(ctx: any): void;
    enterCatch_clause(ctx: any): void;
    exitCatch_clause(ctx: any): void;
    enterCatch_pattern_list(ctx: any): void;
    exitCatch_pattern_list(ctx: any): void;
    enterCatch_pattern(ctx: any): void;
    exitCatch_pattern(ctx: any): void;
    enterCompiler_control_statement(ctx: any): void;
    exitCompiler_control_statement(ctx: any): void;
    enterConditional_compilation_block(ctx: any): void;
    exitConditional_compilation_block(ctx: any): void;
    enterIf_directive_clause(ctx: any): void;
    exitIf_directive_clause(ctx: any): void;
    enterElseif_directive_clauses(ctx: any): void;
    exitElseif_directive_clauses(ctx: any): void;
    enterElseif_directive_clause(ctx: any): void;
    exitElseif_directive_clause(ctx: any): void;
    enterElse_directive_clause(ctx: any): void;
    exitElse_directive_clause(ctx: any): void;
    enterCompilation_condition(ctx: any): void;
    exitCompilation_condition(ctx: any): void;
    enterPlatform_condition(ctx: any): void;
    exitPlatform_condition(ctx: any): void;
    enterSwift_version(ctx: any): void;
    exitSwift_version(ctx: any): void;
    enterSwift_version_continuation(ctx: any): void;
    exitSwift_version_continuation(ctx: any): void;
    enterOperating_system(ctx: any): void;
    exitOperating_system(ctx: any): void;
    enterArchitecture(ctx: any): void;
    exitArchitecture(ctx: any): void;
    enterModule_name(ctx: any): void;
    exitModule_name(ctx: any): void;
    enterEnvironment(ctx: any): void;
    exitEnvironment(ctx: any): void;
    enterLine_control_statement(ctx: any): void;
    exitLine_control_statement(ctx: any): void;
    enterLine_number(ctx: any): void;
    exitLine_number(ctx: any): void;
    enterFile_name(ctx: any): void;
    exitFile_name(ctx: any): void;
    enterDiagnostic_statement(ctx: any): void;
    exitDiagnostic_statement(ctx: any): void;
    enterDiagnostic_message(ctx: any): void;
    exitDiagnostic_message(ctx: any): void;
    enterAvailability_condition(ctx: any): void;
    exitAvailability_condition(ctx: any): void;
    enterAvailability_arguments(ctx: any): void;
    exitAvailability_arguments(ctx: any): void;
    enterAvailability_argument(ctx: any): void;
    exitAvailability_argument(ctx: any): void;
    enterPlatform_name(ctx: any): void;
    exitPlatform_name(ctx: any): void;
    enterPlatform_version(ctx: any): void;
    exitPlatform_version(ctx: any): void;
    enterGeneric_parameter_clause(ctx: any): void;
    exitGeneric_parameter_clause(ctx: any): void;
    enterGeneric_parameter_list(ctx: any): void;
    exitGeneric_parameter_list(ctx: any): void;
    enterGeneric_parameter(ctx: any): void;
    exitGeneric_parameter(ctx: any): void;
    enterGeneric_where_clause(ctx: any): void;
    exitGeneric_where_clause(ctx: any): void;
    enterRequirement_list(ctx: any): void;
    exitRequirement_list(ctx: any): void;
    enterRequirement(ctx: any): void;
    exitRequirement(ctx: any): void;
    enterConformance_requirement(ctx: any): void;
    exitConformance_requirement(ctx: any): void;
    enterSame_type_requirement(ctx: any): void;
    exitSame_type_requirement(ctx: any): void;
    enterGeneric_argument_clause(ctx: any): void;
    exitGeneric_argument_clause(ctx: any): void;
    enterGeneric_argument_list(ctx: any): void;
    exitGeneric_argument_list(ctx: any): void;
    enterGeneric_argument(ctx: any): void;
    exitGeneric_argument(ctx: any): void;
    enterDeclaration(ctx: any): void;
    exitDeclaration(ctx: any): void;
    enterDeclarations(ctx: any): void;
    exitDeclarations(ctx: any): void;
    enterTop_level_declaration(ctx: any): void;
    exitTop_level_declaration(ctx: any): void;
    enterCode_block(ctx: any): void;
    exitCode_block(ctx: any): void;
    enterImport_declaration(ctx: any): void;
    exitImport_declaration(ctx: any): void;
    enterImport_kind(ctx: any): void;
    exitImport_kind(ctx: any): void;
    enterImport_path(ctx: any): void;
    exitImport_path(ctx: any): void;
    enterImport_path_identifier(ctx: any): void;
    exitImport_path_identifier(ctx: any): void;
    enterConstant_declaration(ctx: any): void;
    exitConstant_declaration(ctx: any): void;
    enterPattern_initializer_list(ctx: any): void;
    exitPattern_initializer_list(ctx: any): void;
    enterPattern_initializer(ctx: any): void;
    exitPattern_initializer(ctx: any): void;
    enterInitializer(ctx: any): void;
    exitInitializer(ctx: any): void;
    enterVariable_declaration(ctx: any): void;
    exitVariable_declaration(ctx: any): void;
    enterVariable_declaration_head(ctx: any): void;
    exitVariable_declaration_head(ctx: any): void;
    enterVariable_name(ctx: any): void;
    exitVariable_name(ctx: any): void;
    enterGetter_setter_block(ctx: any): void;
    exitGetter_setter_block(ctx: any): void;
    enterGetter_clause(ctx: any): void;
    exitGetter_clause(ctx: any): void;
    enterSetter_clause(ctx: any): void;
    exitSetter_clause(ctx: any): void;
    enterSetter_name(ctx: any): void;
    exitSetter_name(ctx: any): void;
    enterGetter_setter_keyword_block(ctx: any): void;
    exitGetter_setter_keyword_block(ctx: any): void;
    enterGetter_keyword_clause(ctx: any): void;
    exitGetter_keyword_clause(ctx: any): void;
    enterSetter_keyword_clause(ctx: any): void;
    exitSetter_keyword_clause(ctx: any): void;
    enterWillSet_didSet_block(ctx: any): void;
    exitWillSet_didSet_block(ctx: any): void;
    enterWillSet_clause(ctx: any): void;
    exitWillSet_clause(ctx: any): void;
    enterDidSet_clause(ctx: any): void;
    exitDidSet_clause(ctx: any): void;
    enterTypealias_declaration(ctx: any): void;
    exitTypealias_declaration(ctx: any): void;
    enterTypealias_name(ctx: any): void;
    exitTypealias_name(ctx: any): void;
    enterTypealias_assignment(ctx: any): void;
    exitTypealias_assignment(ctx: any): void;
    enterFunction_declaration(ctx: any): void;
    exitFunction_declaration(ctx: any): void;
    enterFunction_head(ctx: any): void;
    exitFunction_head(ctx: any): void;
    enterFunction_name(ctx: any): void;
    exitFunction_name(ctx: any): void;
    enterFunction_signature(ctx: any): void;
    exitFunction_signature(ctx: any): void;
    enterFunction_result(ctx: any): void;
    exitFunction_result(ctx: any): void;
    enterFunction_body(ctx: any): void;
    exitFunction_body(ctx: any): void;
    enterParameter_clause(ctx: any): void;
    exitParameter_clause(ctx: any): void;
    enterParameter_list(ctx: any): void;
    exitParameter_list(ctx: any): void;
    enterParameter(ctx: any): void;
    exitParameter(ctx: any): void;
    enterExternal_parameter_name(ctx: any): void;
    exitExternal_parameter_name(ctx: any): void;
    enterLocal_parameter_name(ctx: any): void;
    exitLocal_parameter_name(ctx: any): void;
    enterDefault_argument_clause(ctx: any): void;
    exitDefault_argument_clause(ctx: any): void;
    enterEnum_declaration(ctx: any): void;
    exitEnum_declaration(ctx: any): void;
    enterUnion_style_enum(ctx: any): void;
    exitUnion_style_enum(ctx: any): void;
    enterUnion_style_enum_members(ctx: any): void;
    exitUnion_style_enum_members(ctx: any): void;
    enterUnion_style_enum_member(ctx: any): void;
    exitUnion_style_enum_member(ctx: any): void;
    enterUnion_style_enum_case_clause(ctx: any): void;
    exitUnion_style_enum_case_clause(ctx: any): void;
    enterUnion_style_enum_case_list(ctx: any): void;
    exitUnion_style_enum_case_list(ctx: any): void;
    enterUnion_style_enum_case(ctx: any): void;
    exitUnion_style_enum_case(ctx: any): void;
    enterEnum_name(ctx: any): void;
    exitEnum_name(ctx: any): void;
    enterEnum_case_name(ctx: any): void;
    exitEnum_case_name(ctx: any): void;
    enterRaw_value_style_enum(ctx: any): void;
    exitRaw_value_style_enum(ctx: any): void;
    enterRaw_value_style_enum_members(ctx: any): void;
    exitRaw_value_style_enum_members(ctx: any): void;
    enterRaw_value_style_enum_member(ctx: any): void;
    exitRaw_value_style_enum_member(ctx: any): void;
    enterRaw_value_style_enum_case_clause(ctx: any): void;
    exitRaw_value_style_enum_case_clause(ctx: any): void;
    enterRaw_value_style_enum_case_list(ctx: any): void;
    exitRaw_value_style_enum_case_list(ctx: any): void;
    enterRaw_value_style_enum_case(ctx: any): void;
    exitRaw_value_style_enum_case(ctx: any): void;
    enterRaw_value_assignment(ctx: any): void;
    exitRaw_value_assignment(ctx: any): void;
    enterRaw_value_literal(ctx: any): void;
    exitRaw_value_literal(ctx: any): void;
    enterStruct_declaration(ctx: any): void;
    exitStruct_declaration(ctx: any): void;
    enterStruct_name(ctx: any): void;
    exitStruct_name(ctx: any): void;
    enterStruct_body(ctx: any): void;
    exitStruct_body(ctx: any): void;
    enterStruct_members(ctx: any): void;
    exitStruct_members(ctx: any): void;
    enterStruct_member(ctx: any): void;
    exitStruct_member(ctx: any): void;
    enterClass_declaration(ctx: any): void;
    exitClass_declaration(ctx: any): void;
    enterClass_name(ctx: any): void;
    exitClass_name(ctx: any): void;
    enterClass_body(ctx: any): void;
    exitClass_body(ctx: any): void;
    enterClass_members(ctx: any): void;
    exitClass_members(ctx: any): void;
    enterClass_member(ctx: any): void;
    exitClass_member(ctx: any): void;
    enterProtocol_declaration(ctx: any): void;
    exitProtocol_declaration(ctx: any): void;
    enterProtocol_name(ctx: any): void;
    exitProtocol_name(ctx: any): void;
    enterProtocol_body(ctx: any): void;
    exitProtocol_body(ctx: any): void;
    enterProtocol_members(ctx: any): void;
    exitProtocol_members(ctx: any): void;
    enterProtocol_member(ctx: any): void;
    exitProtocol_member(ctx: any): void;
    enterProtocol_member_declaration(ctx: any): void;
    exitProtocol_member_declaration(ctx: any): void;
    enterProtocol_property_declaration(ctx: any): void;
    exitProtocol_property_declaration(ctx: any): void;
    enterProtocol_method_declaration(ctx: any): void;
    exitProtocol_method_declaration(ctx: any): void;
    enterProtocol_initializer_declaration(ctx: any): void;
    exitProtocol_initializer_declaration(ctx: any): void;
    enterProtocol_subscript_declaration(ctx: any): void;
    exitProtocol_subscript_declaration(ctx: any): void;
    enterProtocol_associated_type_declaration(ctx: any): void;
    exitProtocol_associated_type_declaration(ctx: any): void;
    enterInitializer_declaration(ctx: any): void;
    exitInitializer_declaration(ctx: any): void;
    enterInitializer_head(ctx: any): void;
    exitInitializer_head(ctx: any): void;
    enterInitializer_body(ctx: any): void;
    exitInitializer_body(ctx: any): void;
    enterDeinitializer_declaration(ctx: any): void;
    exitDeinitializer_declaration(ctx: any): void;
    enterExtension_declaration(ctx: any): void;
    exitExtension_declaration(ctx: any): void;
    enterExtension_body(ctx: any): void;
    exitExtension_body(ctx: any): void;
    enterExtension_members(ctx: any): void;
    exitExtension_members(ctx: any): void;
    enterExtension_member(ctx: any): void;
    exitExtension_member(ctx: any): void;
    enterSubscript_declaration(ctx: any): void;
    exitSubscript_declaration(ctx: any): void;
    enterSubscript_head(ctx: any): void;
    exitSubscript_head(ctx: any): void;
    enterSubscript_result(ctx: any): void;
    exitSubscript_result(ctx: any): void;
    enterOperator_declaration(ctx: any): void;
    exitOperator_declaration(ctx: any): void;
    enterPrefix_operator_declaration(ctx: any): void;
    exitPrefix_operator_declaration(ctx: any): void;
    enterPostfix_operator_declaration(ctx: any): void;
    exitPostfix_operator_declaration(ctx: any): void;
    enterInfix_operator_declaration(ctx: any): void;
    exitInfix_operator_declaration(ctx: any): void;
    enterInfix_operator_group(ctx: any): void;
    exitInfix_operator_group(ctx: any): void;
    enterPrecedence_group_declaration(ctx: any): void;
    exitPrecedence_group_declaration(ctx: any): void;
    enterPrecedence_group_attributes(ctx: any): void;
    exitPrecedence_group_attributes(ctx: any): void;
    enterPrecedence_group_attribute(ctx: any): void;
    exitPrecedence_group_attribute(ctx: any): void;
    enterPrecedence_group_relation(ctx: any): void;
    exitPrecedence_group_relation(ctx: any): void;
    enterPrecedence_group_assignment(ctx: any): void;
    exitPrecedence_group_assignment(ctx: any): void;
    enterPrecedence_group_associativity(ctx: any): void;
    exitPrecedence_group_associativity(ctx: any): void;
    enterPrecedence_group_names(ctx: any): void;
    exitPrecedence_group_names(ctx: any): void;
    enterPrecedence_group_name(ctx: any): void;
    exitPrecedence_group_name(ctx: any): void;
    enterDeclaration_modifier(ctx: any): void;
    exitDeclaration_modifier(ctx: any): void;
    enterDeclaration_modifiers(ctx: any): void;
    exitDeclaration_modifiers(ctx: any): void;
    enterAccess_level_modifier(ctx: any): void;
    exitAccess_level_modifier(ctx: any): void;
    enterMutation_modifier(ctx: any): void;
    exitMutation_modifier(ctx: any): void;
    enterPattern(ctx: any): void;
    exitPattern(ctx: any): void;
    enterWildcard_pattern(ctx: any): void;
    exitWildcard_pattern(ctx: any): void;
    enterIdentifier_pattern(ctx: any): void;
    exitIdentifier_pattern(ctx: any): void;
    enterValue_binding_pattern(ctx: any): void;
    exitValue_binding_pattern(ctx: any): void;
    enterTuple_pattern(ctx: any): void;
    exitTuple_pattern(ctx: any): void;
    enterTuple_pattern_element_list(ctx: any): void;
    exitTuple_pattern_element_list(ctx: any): void;
    enterTuple_pattern_element(ctx: any): void;
    exitTuple_pattern_element(ctx: any): void;
    enterEnum_case_pattern(ctx: any): void;
    exitEnum_case_pattern(ctx: any): void;
    enterOptional_pattern(ctx: any): void;
    exitOptional_pattern(ctx: any): void;
    enterExpression_pattern(ctx: any): void;
    exitExpression_pattern(ctx: any): void;
    enterAttribute(ctx: any): void;
    exitAttribute(ctx: any): void;
    enterAttribute_name(ctx: any): void;
    exitAttribute_name(ctx: any): void;
    enterAttribute_argument_clause(ctx: any): void;
    exitAttribute_argument_clause(ctx: any): void;
    enterAttributes(ctx: any): void;
    exitAttributes(ctx: any): void;
    enterBalanced_tokens(ctx: any): void;
    exitBalanced_tokens(ctx: any): void;
    enterBalanced_token(ctx: any): void;
    exitBalanced_token(ctx: any): void;
    enterBalanced_token_punctuation(ctx: any): void;
    exitBalanced_token_punctuation(ctx: any): void;
    enterExpression(ctx: any): void;
    exitExpression(ctx: any): void;
    enterExpression_list(ctx: any): void;
    exitExpression_list(ctx: any): void;
    enterPrefix_expression(ctx: any): void;
    exitPrefix_expression(ctx: any): void;
    enterIn_out_expression(ctx: any): void;
    exitIn_out_expression(ctx: any): void;
    enterTry_operator(ctx: any): void;
    exitTry_operator(ctx: any): void;
    enterBinary_expression(ctx: any): void;
    exitBinary_expression(ctx: any): void;
    enterBinary_expressions(ctx: any): void;
    exitBinary_expressions(ctx: any): void;
    enterConditional_operator(ctx: any): void;
    exitConditional_operator(ctx: any): void;
    enterType_casting_operator(ctx: any): void;
    exitType_casting_operator(ctx: any): void;
    enterPrimary_expression(ctx: any): void;
    exitPrimary_expression(ctx: any): void;
    enterUnqualified_name(ctx: any): void;
    exitUnqualified_name(ctx: any): void;
    enterLiteral_expression(ctx: any): void;
    exitLiteral_expression(ctx: any): void;
    enterArray_literal(ctx: any): void;
    exitArray_literal(ctx: any): void;
    enterArray_literal_items(ctx: any): void;
    exitArray_literal_items(ctx: any): void;
    enterArray_literal_item(ctx: any): void;
    exitArray_literal_item(ctx: any): void;
    enterDictionary_literal(ctx: any): void;
    exitDictionary_literal(ctx: any): void;
    enterDictionary_literal_items(ctx: any): void;
    exitDictionary_literal_items(ctx: any): void;
    enterDictionary_literal_item(ctx: any): void;
    exitDictionary_literal_item(ctx: any): void;
    enterPlayground_literal(ctx: any): void;
    exitPlayground_literal(ctx: any): void;
    enterSelf_pure_expression(ctx: any): void;
    exitSelf_pure_expression(ctx: any): void;
    enterSelf_method_expression(ctx: any): void;
    exitSelf_method_expression(ctx: any): void;
    enterSelf_subscript_expression(ctx: any): void;
    exitSelf_subscript_expression(ctx: any): void;
    enterSelf_initializer_expression(ctx: any): void;
    exitSelf_initializer_expression(ctx: any): void;
    enterSuperclass_method_expression(ctx: any): void;
    exitSuperclass_method_expression(ctx: any): void;
    enterSuperclass_subscript_expression(ctx: any): void;
    exitSuperclass_subscript_expression(ctx: any): void;
    enterSuperclass_initializer_expression(ctx: any): void;
    exitSuperclass_initializer_expression(ctx: any): void;
    enterClosure_expression(ctx: any): void;
    exitClosure_expression(ctx: any): void;
    enterClosure_signature(ctx: any): void;
    exitClosure_signature(ctx: any): void;
    enterClosure_parameter_clause(ctx: any): void;
    exitClosure_parameter_clause(ctx: any): void;
    enterClosure_parameter_list(ctx: any): void;
    exitClosure_parameter_list(ctx: any): void;
    enterClosure_parameter(ctx: any): void;
    exitClosure_parameter(ctx: any): void;
    enterCapture_list(ctx: any): void;
    exitCapture_list(ctx: any): void;
    enterCapture_list_items(ctx: any): void;
    exitCapture_list_items(ctx: any): void;
    enterCapture_list_item(ctx: any): void;
    exitCapture_list_item(ctx: any): void;
    enterCapture_specifier(ctx: any): void;
    exitCapture_specifier(ctx: any): void;
    enterImplicit_member_expression(ctx: any): void;
    exitImplicit_member_expression(ctx: any): void;
    enterParenthesized_operator(ctx: any): void;
    exitParenthesized_operator(ctx: any): void;
    enterParenthesized_expression(ctx: any): void;
    exitParenthesized_expression(ctx: any): void;
    enterTuple_expression(ctx: any): void;
    exitTuple_expression(ctx: any): void;
    enterTuple_element_list(ctx: any): void;
    exitTuple_element_list(ctx: any): void;
    enterTuple_element(ctx: any): void;
    exitTuple_element(ctx: any): void;
    enterWildcard_expression(ctx: any): void;
    exitWildcard_expression(ctx: any): void;
    enterKey_path_expression(ctx: any): void;
    exitKey_path_expression(ctx: any): void;
    enterKey_path_components(ctx: any): void;
    exitKey_path_components(ctx: any): void;
    enterKey_path_component(ctx: any): void;
    exitKey_path_component(ctx: any): void;
    enterKey_path_postfixes(ctx: any): void;
    exitKey_path_postfixes(ctx: any): void;
    enterKey_path_postfix(ctx: any): void;
    exitKey_path_postfix(ctx: any): void;
    enterSelector_expression(ctx: any): void;
    exitSelector_expression(ctx: any): void;
    enterKey_path_string_expression(ctx: any): void;
    exitKey_path_string_expression(ctx: any): void;
    enterPostfix_expression(ctx: any): void;
    exitPostfix_expression(ctx: any): void;
    enterFunction_call_suffix(ctx: any): void;
    exitFunction_call_suffix(ctx: any): void;
    enterInitializer_suffix(ctx: any): void;
    exitInitializer_suffix(ctx: any): void;
    enterExplicit_member_suffix(ctx: any): void;
    exitExplicit_member_suffix(ctx: any): void;
    enterPostfix_self_suffix(ctx: any): void;
    exitPostfix_self_suffix(ctx: any): void;
    enterSubscript_suffix(ctx: any): void;
    exitSubscript_suffix(ctx: any): void;
    enterForced_value_suffix(ctx: any): void;
    exitForced_value_suffix(ctx: any): void;
    enterOptional_chaining_suffix(ctx: any): void;
    exitOptional_chaining_suffix(ctx: any): void;
    enterFunction_call_argument_clause(ctx: any): void;
    exitFunction_call_argument_clause(ctx: any): void;
    enterFunction_call_argument_list(ctx: any): void;
    exitFunction_call_argument_list(ctx: any): void;
    enterFunction_call_argument(ctx: any): void;
    exitFunction_call_argument(ctx: any): void;
    enterTrailing_closures(ctx: any): void;
    exitTrailing_closures(ctx: any): void;
    enterLabeled_trailing_closures(ctx: any): void;
    exitLabeled_trailing_closures(ctx: any): void;
    enterLabeled_trailing_closure(ctx: any): void;
    exitLabeled_trailing_closure(ctx: any): void;
    enterArgument_names(ctx: any): void;
    exitArgument_names(ctx: any): void;
    enterArgument_name(ctx: any): void;
    exitArgument_name(ctx: any): void;
    enterType(ctx: any): void;
    exitType(ctx: any): void;
    enterType_annotation(ctx: any): void;
    exitType_annotation(ctx: any): void;
    enterType_identifier(ctx: any): void;
    exitType_identifier(ctx: any): void;
    enterType_name(ctx: any): void;
    exitType_name(ctx: any): void;
    enterTuple_type(ctx: any): void;
    exitTuple_type(ctx: any): void;
    enterTuple_type_element_list(ctx: any): void;
    exitTuple_type_element_list(ctx: any): void;
    enterTuple_type_element(ctx: any): void;
    exitTuple_type_element(ctx: any): void;
    enterElement_name(ctx: any): void;
    exitElement_name(ctx: any): void;
    enterFunction_type(ctx: any): void;
    exitFunction_type(ctx: any): void;
    enterFunction_type_argument_clause(ctx: any): void;
    exitFunction_type_argument_clause(ctx: any): void;
    enterFunction_type_argument_list(ctx: any): void;
    exitFunction_type_argument_list(ctx: any): void;
    enterFunction_type_argument(ctx: any): void;
    exitFunction_type_argument(ctx: any): void;
    enterArgument_label(ctx: any): void;
    exitArgument_label(ctx: any): void;
    enterArray_type(ctx: any): void;
    exitArray_type(ctx: any): void;
    enterDictionary_type(ctx: any): void;
    exitDictionary_type(ctx: any): void;
    enterProtocol_composition_type(ctx: any): void;
    exitProtocol_composition_type(ctx: any): void;
    enterTrailing_composition_and(ctx: any): void;
    exitTrailing_composition_and(ctx: any): void;
    enterOpaque_type(ctx: any): void;
    exitOpaque_type(ctx: any): void;
    enterAny_type(ctx: any): void;
    exitAny_type(ctx: any): void;
    enterSelf_type(ctx: any): void;
    exitSelf_type(ctx: any): void;
    enterType_inheritance_clause(ctx: any): void;
    exitType_inheritance_clause(ctx: any): void;
    enterType_inheritance_list(ctx: any): void;
    exitType_inheritance_list(ctx: any): void;
    enterIdentifier(ctx: any): void;
    exitIdentifier(ctx: any): void;
    enterIdentifier_list(ctx: any): void;
    exitIdentifier_list(ctx: any): void;
    enterKeyword(ctx: any): void;
    exitKeyword(ctx: any): void;
    enterAssignment_operator(ctx: any): void;
    exitAssignment_operator(ctx: any): void;
    enterNegate_prefix_operator(ctx: any): void;
    exitNegate_prefix_operator(ctx: any): void;
    enterCompilation_condition_AND(ctx: any): void;
    exitCompilation_condition_AND(ctx: any): void;
    enterCompilation_condition_OR(ctx: any): void;
    exitCompilation_condition_OR(ctx: any): void;
    enterCompilation_condition_GE(ctx: any): void;
    exitCompilation_condition_GE(ctx: any): void;
    enterCompilation_condition_L(ctx: any): void;
    exitCompilation_condition_L(ctx: any): void;
    enterArrow_operator(ctx: any): void;
    exitArrow_operator(ctx: any): void;
    enterRange_operator(ctx: any): void;
    exitRange_operator(ctx: any): void;
    enterSame_type_equals(ctx: any): void;
    exitSame_type_equals(ctx: any): void;
    enterBinary_operator(ctx: any): void;
    exitBinary_operator(ctx: any): void;
    enterPrefix_operator(ctx: any): void;
    exitPrefix_operator(ctx: any): void;
    enterPostfix_operator(ctx: any): void;
    exitPostfix_operator(ctx: any): void;
    enterOperator(ctx: any): void;
    exitOperator(ctx: any): void;
    enterOperator_head(ctx: any): void;
    exitOperator_head(ctx: any): void;
    enterOperator_character(ctx: any): void;
    exitOperator_character(ctx: any): void;
    enterOperator_characters(ctx: any): void;
    exitOperator_characters(ctx: any): void;
    enterDot_operator_head(ctx: any): void;
    exitDot_operator_head(ctx: any): void;
    enterDot_operator_character(ctx: any): void;
    exitDot_operator_character(ctx: any): void;
    enterDot_operator_characters(ctx: any): void;
    exitDot_operator_characters(ctx: any): void;
    enterLiteral(ctx: any): void;
    exitLiteral(ctx: any): void;
    enterNumeric_literal(ctx: any): void;
    exitNumeric_literal(ctx: any): void;
    enterBoolean_literal(ctx: any): void;
    exitBoolean_literal(ctx: any): void;
    enterNil_literal(ctx: any): void;
    exitNil_literal(ctx: any): void;
    enterInteger_literal(ctx: any): void;
    exitInteger_literal(ctx: any): void;
    enterString_literal(ctx: any): void;
    exitString_literal(ctx: any): void;
    enterExtended_string_literal(ctx: any): void;
    exitExtended_string_literal(ctx: any): void;
    enterStatic_string_literal(ctx: any): void;
    exitStatic_string_literal(ctx: any): void;
    enterInterpolated_string_literal(ctx: any): void;
    exitInterpolated_string_literal(ctx: any): void;
}
