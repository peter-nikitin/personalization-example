import { RequestConstructor } from "pages/request-constructor";

export type GetData = (arg0: RequestConstructor) => Promise<FormsEntity[]>;

export interface Forms {
  contacts?: null[] | null;
  geo?: null;
  ip: string;
  forms?: FormsEntity[] | null;
  templates?: TemplatesEntity[] | null;
  button_templates?: null[] | null;
  integrations?: IntegrationsEntity[] | null;
  settings: Settings;
  frequency: Frequency;
}
export interface FormsEntity {
  id: number;
  template: number;
  button_template?: null;
  test_group?: null;
  new_targeting: NewTargeting;
  settings_splits?: SettingsSplitsEntity[] | null;
  pinned: boolean;
  name: string;
  active: boolean;
  embed_selector: boolean;
  selector: string;
  placement: string;
  frequency: Frequency1;
  start_date?: null;
  end_date?: null;
  day_of_week?: boolean[] | null;
  start_time?: null;
  end_time?: null;
  timezone_minutes: number;
  custom_fields?: null[] | null;
  container_id?: null;
  child_forms?: null[] | null;
}
export interface NewTargeting {
  filter: Filter;
}
export interface Filter {
  id: string;
  name: string;
  nodes?: NodesEntity[] | null;
  operator: string;
}
export interface NodesEntity {
  id: string;
  field: string;
  value: Value;
  operator: string;
}
export interface Value {
  auto: boolean;
  inSegment: boolean;
  operation: string;
  segmentation: string;
  inSegmentByDefault: boolean;
}
export interface SettingsSplitsEntity {
  settings: Settings1;
  button_settings: ButtonSettings;
  conditions_splits?: null[] | null;
  id: number;
  behavior_settings: BehaviorSettings;
  html: string;
  css: string;
  button_html: string;
  button_css: string;
}
export interface Settings1 {
  [key: string]: any;
}
export interface ButtonSettings {}
export interface BehaviorSettings {
  embedded: Embedded;
}
export interface Embedded {
  animation_out: string;
}
export interface Frequency1 {
  once_lifetime: boolean;
  once_session: boolean;
  priority: boolean;
  minimal_timeout?: null;
}
export interface TemplatesEntity {
  id: number;
  html: string;
  css: string;
  button: string;
  on_show: string;
  on_close: string;
  embed_code: string;
  behaviors?: string[] | null;
  template_type: string;
  need_reset: boolean;
  parameters?: null[] | null;
  on_targeting_ready: string;
  on_child_ready?: string | null;
}
export interface IntegrationsEntity {
  id: number;
  form: number;
  filter?: null;
  filter_type?: null;
  account: number;
  integration_type: string;
  get_subscription_operation?: string | null;
  subscribe_operation?: string | null;
  show_operation?: string | null;
  click_operation?: string | null;
  targeting_operation?: string | null;
}
export interface Settings {
  hide_copyright: boolean;
  premium: boolean;
}
export interface Frequency {
  minimal_timeout?: null;
  session?: null;
  day?: null;
  week?: null;
  month?: null;
}
