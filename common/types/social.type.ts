export interface ISocial {
  id: string;
  key: KeySocial;
  name: string;
  username: string;
  link: string;
  is_show: boolean
}

export type KeySocial = 
  'facebook'
  | 'instagram'
  | 'linkedin'
  