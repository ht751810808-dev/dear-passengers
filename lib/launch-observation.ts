export type LaunchEventType = 'full-release' | 'early-access' | 'demo' | 'playtest' | 'major-announcement';
export type ObservationRecordStatus = 'draft' | 'verified' | 'published' | 'superseded';
export type EvidenceStatus = 'confirmed' | 'observed' | 'inference' | 'unknown';

export interface LaunchObservation {
  schemaVersion: 1;
  isTemplate: boolean;
  recordId: string;
  recordStatus: ObservationRecordStatus;
  eventType: LaunchEventType | null;
  detectedAt: string | null;
  verifiedAt: string | null;
  verifier: {
    role: string | null;
    initials: string | null;
  };
  activation: {
    firstPartySignal: {
      confirmed: boolean;
      sourceUrls: string[];
      capturedAt: string | null;
      notes: string | null;
    };
    publicAccess: {
      confirmed: boolean;
      storefront: string | null;
      storeRegion: string | null;
      purchaseOrInstallAvailable: boolean;
      price: {
        amount: number | null;
        currency: string | null;
        discountPercent: number | null;
        discountEndsAt: string | null;
      };
      evidencePaths: string[];
      notes: string | null;
    };
  };
  build: {
    steamAppId: '4534960';
    accessType: LaunchEventType | null;
    buildId: string | null;
    versionLabel: string | null;
    branchLabel: string | null;
    platform: string | null;
    storeRegion: string | null;
    downloadBytes: number | null;
    installedBytes: number | null;
    firstLaunchRequirements: string[];
    notes: string | null;
  };
  testEnvironment: {
    environmentId: string | null;
    operatingSystem: string | null;
    cpu: string | null;
    gpu: string | null;
    memoryGb: number | null;
    storageType: string | null;
    display: {
      resolution: string | null;
      refreshRateHz: number | null;
    };
    inputDevices: string[];
    networkRegion: string | null;
    notes: string | null;
  };
  controls: {
    tested: boolean;
    testStartedAt: string | null;
    testEndedAt: string | null;
    keyboardMouse: Array<Record<string, unknown>>;
    controllers: Array<Record<string, unknown>>;
    accessibilityOptions: Array<Record<string, unknown>>;
    evidencePaths: string[];
    notes: string | null;
  };
  multiplayer: {
    tested: boolean;
    participantConsentConfirmed: boolean;
    participantCount: number | null;
    maximumLobbySize: number | null;
    maximumLobbySizeStatus: EvidenceStatus;
    inviteFlow: string[];
    matchmaking: { status: EvidenceStatus; notes: string | null };
    joinInProgress: { status: EvidenceStatus; notes: string | null };
    localCoop: { status: EvidenceStatus; notes: string | null };
    splitScreen: { status: EvidenceStatus; notes: string | null };
    crossplay: { status: EvidenceStatus; notes: string | null };
    voiceChat: { status: EvidenceStatus; notes: string | null };
    evidencePaths: string[];
    notes: string | null;
  };
  performance: {
    tested: boolean;
    methodology: string | null;
    runs: Array<Record<string, unknown>>;
    evidencePaths: string[];
    notes: string | null;
  };
  issues: Array<Record<string, unknown>>;
  media: Array<Record<string, unknown>>;
  demandEvidence: Array<Record<string, unknown>>;
  contentDecision: {
    selectedOwnerRoute: string | null;
    candidateNewRoute: string | null;
    independentIntentConfirmed: boolean;
    decision: 'research-only' | 'upgrade-owner' | 'create-route' | 'correct-facts';
    reason: string | null;
    requiredInternalLinks: string[];
    localizationCandidates: string[];
  };
  publication: {
    status: 'not-started' | 'in-progress' | 'deployed' | 'failed' | 'rolled-back';
    modifiedRoutes: string[];
    checks: Record<string, boolean>;
    gitCommit: string | null;
    branch: string | null;
    deploymentUrl: string | null;
    productionUrls: string[];
    sitemapUrlCount: number | null;
    submissions: Record<string, { status: string; receipt: string | null }>;
  };
  unknowns: string[];
  followUpAt: string | null;
}
