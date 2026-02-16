export interface KeyAssessment {
    key_id: number;
    key_is_credited: boolean;
    matched_variant: string;
    student_quote: string;
    expert_explanation: string;
    bio_error_in_key: boolean;
    bio_error_explanation: string;
}

export interface GradeResult {
    task_id: string;
    line: number;
    task_score_0_to_3: number;
    n_credited_keys: number;
    n_keys: number;
    keys: KeyAssessment[];
    bio_error_outside_keys_present: boolean;
    bio_error_outside_keys_evidence: string;
    bio_error_outside_keys_explanation: string;
}
