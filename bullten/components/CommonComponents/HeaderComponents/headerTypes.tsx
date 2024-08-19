export type SubHeader = {
  id: number;
  title: string;
  slug: string;
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
    header: HeaderMenu[];
  };
};
