export interface ExperienceItem {
    from: string;
    to: string;
    employer: string;
    role: string;
    summary: string;
    detail: DetailItem[];
}

export interface DetailItem {
  item: string;
}
