interface WordAnalysis {
    index: number;
    word: string;
    ignored: boolean;
    pos: string;
    original: string;
    processedWord: string;
}

interface NlProcessing {
    originalInput: string;
    spellCorrectedInput: string;
    canonical: string;
    wordAnalysis: WordAnalysis[];
}

interface EliminatedTask {
    count: number;
    score: number;
    activityType: number;
    labelsize: number;
    mask: number;
    priority: number;
    tense: number;
    matchType: string;
    eliminationInfo: {
        reason: string;
    };
    task: string;
    state: string;
}

interface FaqDemystification {
    path_coverage: {
        total_failures: number;
        questions: string[];
    };
    mandatory_node: {
        total_failures: number;
        paths: string[];
    };
    precondition_node: {
        total_failures: number;
        paths: string[];
    };
}

interface FaqPossible {
    task: string;
    primaryQuestion: string;
    faqDemystification: {
        path: string[];
    };
    faqScore: number;
    state: string;
    foundVia: string;
    linkedDialog: string;
    linkedDialogID: string;
    showfaqDialog: string;
    MatchedQuestionID: string;
}

interface Faq {
    demystify: {
        normalizedQuery: string;
        OntologyTraits: any[];
        failed_questions: FaqDemystification;
        SelectedPathCount: number;
        ExtractedEntities: string[];
        ContextEntities: any[];
        PreConditionNodes: any[];
        filtered_questions: {
            score: [string, number][];
            traits: any[];
        };
        source: string;
        no_of_questions_matched: number;
    };
    possible: FaqPossible[];
}

interface FinalResolverRanking {
    intent: string;
    primaryQuestion: string;
    activityType: string;
    faqScore: number;
    faqDemystification: {
        path: string[];
    };
    intentMatchVia: string;
    taskId: string;
    linkedDialog: string;
    linkedDialogID: string;
    showfaqDialog: string;
    identifyingEngines: {
        faq: boolean;
    };
    totalScore: number;
    scoring: {
        activityType: number;
        faqScore: number;
        threshold: string;
        faqId: string;
        activity: string;
        botid: string;
        botname: string;
        score: number;
        mask: number;
        matchType: string;
    };
}

interface WinningIntent {
    identifyingEngines: {
        faq: boolean;
    };
    intent: string;
    matchedQuestion: string;
    primaryQuestion: string;
    faqId: string;
    faqRefId: string;
    activityType: string;
    score: number;
    faqScore: number;
    matchType: string;
    taskId: string;
    state: string;
    faqDemystification: {
        path: string[];
    };
    linkedDialog: string;
    linkedDialogID: string;
    showfaqDialog: string;
}

interface FinalResolver {
    ranking: FinalResolverRanking[];
    userInput: string;
    cutoffScore: number;
    winningIntent: WinningIntent[];
    disableRRMessage: boolean;
    entities: any[];
}

export interface Response {
    usedtime: number;
    debugTitle: string;
    result: string;
    messageStoreId: string;
    bot: string;
    botid: string;
    skipConversation: boolean;
    task: string;
    botLanguage: string;
    nluLanguage: string;
    taskId: string;
    isLinkedToFaq: boolean;
    linkedfaqId: string;
    showfaqDialog: string;
    KTId: string;
    refId: string;
    intentStatus: string;
    subType: string;
    input: string[];
    identifiedVia: string;
    language: string;
    userId: string;
    time: string;
    _id: string;
    intentRescoring: boolean;
    isPreferDefinitiveMatch: boolean;
    scoringModel: string;
    toneAnalysis: any;
    nlProcessing: NlProcessing;
    noLabelMatch: string[];
    ml: {
        intentModel: string;
        namedEntityRecognition: any[];
        influences: {
            sentence: string;
            influences: {
                spell_corrected: string[];
            };
        }[];
    };
    fm: {
        eliminated: EliminatedTask[];
    };
    faq: Faq;
    finalResolver: FinalResolver;
}

interface Stream {
    streamId: string;
    streamName: string;
    seqLogId: string;
    _id: string;
    name: string;
    input: string[];
}

export interface ApiResponse {
    request: {
        input: string;
        streamName: string;
    };
    response: Response;
    streamId: string;
    streamName: string;
    seqLogId: string;
    _id: string;
    name: string;
    input: string[];
}

