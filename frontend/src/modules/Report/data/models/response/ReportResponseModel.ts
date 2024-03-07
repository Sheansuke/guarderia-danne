export interface ReportResponseModel {
  today_i_felt: string[];
  during_work_hours_i_was: string[];
  extra_comment_work_hour?: string;
  today_i_ate: string[];
  extra_comment_today_i_ate?: string;
  in_the_bathroom: string[];
  extra_comment_bathroom?: string;
  needs: string[];
  extra_comment_needs?: string;
}
