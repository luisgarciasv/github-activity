
const githubEvents = {

    _capitalize(word) {
        return word.chartAt(0).toUpperCase() + word.slice(1)
    },

    _aEventQt(amount) {
        return amount === 1 ? 'a' : amount
    },

    _anEventQt(amount) {
        return amount === 1 ? 'an' : amount
    },

    _pluralize(amount, word) {
        return amount === 1 ? word : word + 's'
    },

    CommitCommentEvent: ({name, action, eventAmount}) => {

        return `${_capitalize(action)} ${_aEventQt(eventAmount)} commit ${_pluralize(eventAmount, 'comment')} at ${name}`
        // name: "a commit comment",
        //     action: {
        //     created,
        //         updated,
        //         deleted
        // }
    },

    CreateEvent: ({name, ref_type, eventAmount}) => {

        return `Created ${_aEventQt(eventAmount)} ${ref_type} in ${name}`
        // name: "created a",
        // ref_type: {
        //     branch,
        //     tag,
        //     repository
        // }
    },

    DeleteEvent: ({name, ref_type, eventAmount}) => {

        return `Deleted ${_aEventQt(eventAmount)} ${ref_type} in ${name}`
        // name: "deleted a",
        // ref_type: {
        //     branch,
        //     tag
        // }
    },
    //"DeploymentEvent": "Deployment Event",
    //"DeploymentStatusEvent": "Deployment Status Event",

    ForkEvent: ({name}) => {

        return `Forked the repo ${name}`
        // name: "forked the repo"
    },

    GollumEvent: ({name, action, eventAmount}) => {

        return `${_capitalize(action)} ${_aEventQt(eventAmount)} wiki ${_pluralize(eventAmount, 'page')} for ${name}`
        // name: "the wiki page for",
        // action: {
        //     created,
        //     updated
        // }
    },
    //"InstallationEvent": "Installation Event",
    //"InstallationRepositoriesEvent": "Installation Repositories Event",

    IssueCommentEvent: ({name, action, eventAmount}) => {

        return `${_capitalize(action)} ${_anEventQt(eventAmount)} issue ${_pluralize(eventAmount, 'comment')} at ${name}`
        // name: "an issue comment",
        // action: {
        //     created,
        //     updated,
        //     deleted
        // }
    },

    IssuesEvent: ({name, action, eventAmount}) =>  {

        return `${_capitalize(action)} ${_eventQt(eventAmount)} ${_issueQt(eventAmount)} at ${name}`
        // name: "an  issue",
        // action: {
        //     opened,
        //     edited,
        //     closed,
        //     reopened,
        //     assigned,
        //     unassigned,
        //     labeled,
        //     unlabeled
        // }
    },
    //"LabelEvent": "Label Event",
    //"MarketplacePurchaseEvent": "Marketplace Purchase Event",

    MemberEvent: ({name, action, member}) => {

        return `${_capitalize(action)} ${member} on the repo ${name}`
        // name: "this member to the repo",
        // action: {
        //     added,
        //     removed,
        //     edited
        // }
    },
    //   "MembershipEvent": "Membership Event",
    //   "MilestoneEvent": "Milestone Event",
    //   "OrganizationEvent": "Organization Event",
    //   "OrgBlockEvent": "Organization Block Event",
    //   "PageBuildEvent": "Page Build Event",
    //   "ProjectCardEvent": "Project Card Event",
    //   "ProjectColumnEvent": "Project Column Event",
    //   "ProjectEvent": "Project Event",

    PublicEvent: ({name}) => {

        return `Made public the repo ${name}`
        // name: "made the repo public"
    },

    PullRequestEvent: ({name, action, merged}) => {

        return `${_capitalize(action)}${merged ? '(merged)' : ''} a pull request at ${name}`
        // name: "a pull request",
        // action: {
        //     opened,
        //     edited,
        //     closed,
        //     reopened,
        //     assigned,
        //     unassigned,
        //     review_requested,
        //     review_request_removed,
        //     labeled,
        //     unlabeled,
        //     synchronize
        // }
    },

    PullRequestReviewEvent: ({name, action}) => {

        return `${_capitalize(action)} a pull request review at ${name}`
        // name: "a pull request review",
        // action: {
        //     created,
        //     requested,
        //     submited,
        //     edited,
        //     dismissed,
        //     commented
        // }
    },

    PullRequestReviewCommentEvent: ({name, action, eventAmount}) => {

        return `${_capitalize(action)} ${_aEventQt(eventAmount)} pull request review ${_pluralize(eventAmount, 'comment')} at ${name}`
        // name: "a pull request review comment",
        // action: {
        //     created,
        //     updated,
        //     deleted
        // }
    },

    PushEvent: ({name, eventAmount}) => {

        return `Pushed ${_aEventQt(eventAmount)} ${_pluralize(eventAmount, 'commit')} to ${name}`
        // "pushed a commit"
    },

    ReleaseEvent: ({name, action, eventAmount}) => {

        return `${_capitalize(action)} ${_aEventQt(eventAmount)} ${_pluralize(eventAmount, 'release')} for the repo ${name}`
        // name: "a realease for the repo",
        // options: {
        //     created,
        //     updated
        // }
    },
    // "RepositoryDispatchEvent": "Repository Dispatch Event",
    // "RepositoryEvent": "Repository Event",
    // "RepositoryImportEvent": "Repository Import Event",
    // "RepositoryVulnerabilityAlertEvent": "Repository Vulnerability Alert Event",
    // "SecurityAdvisoryEvent": "Security Advisory Event",
    // "StarEvent": "Star Event",
    // "StatusEvent": "Status Event",
    // "TeamEvent": "Team Event",
    // "TeamAddEvent": "Team Add Event",

    WatchEvent: ({name}) => {

        return `Starred the repo ${name}`
        // "stared a repo"
    }
}


//[$].payload.pull_request.merged

export { githubEvents }
