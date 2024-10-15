const githubEvents = {

    _capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    },

    _aEventQt(amount) {
        return amount === 1 ? 'a' : amount;
    },

    _anEventQt(amount) {
        return amount === 1 ? 'an' : amount;
    },

    _pluralize(amount, word) {
        return amount === 1 ? word : word + 's';
    },

    CommitCommentEvent({ name, action, eventAmount }) {
        return `${this._capitalize(action)} ${this._aEventQt(eventAmount)} commit ${this._pluralize(eventAmount, 'comment')
            } at ${name}`;
    },

    CreateEvent({ name, ref_type, eventAmount }) {
        return `Created ${this._aEventQt(eventAmount)} ${ref_type} in ${name}`;
    },

    DeleteEvent({ name, ref_type, eventAmount }) {
        return `Deleted ${this._aEventQt(eventAmount)} ${ref_type} in ${name}`;
    },

    ForkEvent({ name }) {
        return `Forked the repo ${name}`;
    },

    GollumEvent({ name, action, eventAmount }) {
        return `${this._capitalize(action)} ${this._aEventQt(eventAmount)} wiki ${this._pluralize(eventAmount, 'page')
            } for ${name}`;
    },

    IssueCommentEvent({ name, action, eventAmount }) {
        return `${this._capitalize(action)} ${this._anEventQt(eventAmount)} issue ${this._pluralize(eventAmount, 'comment')
            } at ${name}`;
    },

    IssuesEvent({ name, action, eventAmount }) {
        return `${this._capitalize(action)} ${this._aEventQt(eventAmount)} issue at ${name}`;
    },

    MemberEvent({ name, action, member }) {
        return `${this._capitalize(action)} ${member} on the repo ${name}`;
    },

    PublicEvent({ name }) {
        return `Made public the repo ${name}`;
    },

    PullRequestEvent({ name, action, merged }) {
        return `${this._capitalize(action)}${merged ? '(merged)' : ''
            } a pull request at ${name}`;
    },

    PullRequestReviewEvent({ name, action }) {
        return `${this._capitalize(action)} a pull request review at ${name}`;
    },

    PullRequestReviewCommentEvent({ name, action, eventAmount }) {
        return `${this._capitalize(action)} ${this._aEventQt(eventAmount)
            } pull request review ${this._pluralize(eventAmount, 'comment')} at ${name}`;
    },

    PushEvent({ name, eventAmount }) {
        return `Pushed ${this._aEventQt(eventAmount)} ${this._pluralize(eventAmount, 'commit')
            } to ${name}`;
    },

    ReleaseEvent({ name, action, eventAmount }) {
        return `${this._capitalize(action)} ${this._aEventQt(eventAmount)} ${this._pluralize(eventAmount, 'release')
            } for the repo ${name}`;
    },

    WatchEvent({ name }) {
        return `Starred the repo ${name}`;
    },
};

export { githubEvents };
