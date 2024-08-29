export type SubHeader = {
  subheaders: SubHeaderLinks[];
  Subheader_heading: string;
};

export type SubHeaderLinks = {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: string; 
  image_alt_text: string;
  Subheader_heading: string;
};

export type HeaderMenu = {
  id: number;
  title: string;
  path: string;
  subheader: SubHeader[];
};

export type HeaderResponse = {
  result: {
    logo: string;
    logo_alternate_text: string;
    email: string;
    phone: string;
    header: HeaderMenu[];
  };
};
