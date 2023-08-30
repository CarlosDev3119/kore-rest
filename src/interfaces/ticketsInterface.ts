interface Source {
    from: any;
    to: any;
    rel: any;
}

interface Via {
    channel: string;
    source: Source;
}

interface CustomField {
    id: number;
    value: any;
}

interface Field {
    id: number;
    value: any;
}

interface Ticket {
    url: string;
    id: number;
    external_id: any;
    via: Via;
    created_at: string;
    updated_at: string;
    type: any;
    subject: string;
    raw_subject: string;
    description: string;
    priority: string;
    status: string;
    requester_id: number;
    submitter_id: number;
    group_id: number;
    collaborator_ids: any[];
    follower_ids: any[];
    email_cc_ids: any[];
    forum_topic_id: any;
    problem_id: any;
    has_incidents: boolean;
    is_public: boolean;
    due_at: any;
    tags: string[];
    custom_fields: CustomField[];
    fields: Field[];
    satisfaction_rating: any;
    sharing_agreement_ids: any[];
    custom_status_id: number;
    ticket_form_id: number;
    brand_id: number;
    allow_channelback: boolean;
    allow_attachments: boolean;
    from_messaging_channel: boolean;
}

export interface TicketResponse {
    ticket: Ticket;
}