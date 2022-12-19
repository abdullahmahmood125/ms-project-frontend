import { FormErrorTypes } from '../form-error-types';


export const FormErrorHelpingVerbDict = {
    [FormErrorTypes.UNIQUE]: 'must_be',
    [FormErrorTypes.ALPHA]: 'should_contain',
    [FormErrorTypes.URL]: 'not_a_valid',
    [FormErrorTypes.MAX_LENGTH]: 'can_not_be_greater_than',
    [FormErrorTypes.MIN_LENGTH]: 'can_not_be_less_than',
    [FormErrorTypes.MIN_NUMBER]: 'must_be_greater_than_equal_to',
    [FormErrorTypes.MAX_NUMBER]: 'must_be_less_than_equal_to',
    [FormErrorTypes.LESS_THAN_MAIL_DATE]: 'must_be_less_than',
    [FormErrorTypes.LESS_THAN_PRINT_DATE]: 'must_be_less_than',
    [FormErrorTypes.LESS_THAN_DUE_DATE]: 'must_be_less_than',
    [FormErrorTypes.MISMATCH_PASSWORD]: '',
    [FormErrorTypes.PASSWORD_POLICY]: '',
};

export const FormErrorMessageDict = {
    [FormErrorTypes.MIN_NUMBER]: '0',
    [FormErrorTypes.LESS_THAN_MAIL_DATE]: 'sale_date',
    [FormErrorTypes.LESS_THAN_PRINT_DATE]: 'sale_date',
    [FormErrorTypes.LESS_THAN_DUE_DATE]: 'sale_date',
    [FormErrorTypes.LESS_THAN_FROM_PAGE]: 'less_than_from_page',
    [FormErrorTypes.NOT_VALID_FOR_SELECTED_PAGES]: 'not_valid_for_selected_pages',
    [FormErrorTypes.ALREADY_SELECTED]: 'already_selected',
};
