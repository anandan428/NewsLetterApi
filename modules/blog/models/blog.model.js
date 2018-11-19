var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new Schema({
    created: {
        type: Date,
        default:  Date.now
    },
    title: {
        type: String,
        default: 'Title of did you know'
    },
    image: {
        type: String,
        default: ''
    },
    body: {
        type: String,
        default: 'Body of the card'
    }
});

var ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: 'Title of the article',
    },
    subtitle: {
        type: String,
        default: 'Something is really funny about this article.',
    },
    body: {
        type: String,
        default: 'Add content here',
    },
    coverImage: {
        type: String,
        default: 'Cover Page image',
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    isDraft: {
        type: Boolean,
        default: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    edited: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    list: [
        CardSchema
    ],
    modified: {
        type: Date
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

ArticleSchema.statics.list = function (query = {}, callback) {
    return this.find(query).select('-body').populate('author', 'name img email team').populate('edited', 'name');
}

ArticleSchema.virtual('date').get(() => {
    let modifedDate = new Date(this.modified);
    console.log(this.modified);
    return modifedDate.getDate() + ' ' + modifedDate.getMonth() + 1;
});



module.exports = mongoose.model('Blog', ArticleSchema);    