export interface ListUsers {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        DataUser[];
    support:     Support;
}

export interface DataUser {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
