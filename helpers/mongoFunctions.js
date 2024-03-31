module.exports = {
    create: async (collection, document) => await collection.create(document),

    find: async (collection, filter = {}, options = {}) => {
        let query = collection.find(filter);
        if (options && options.projection) query = query.select(options.projection);
        if (options && options.sort) query = query.sort(options.sort);
        if (options && options.skip) query = query.skip(options.skip);
        if (options && options.limit) query = query.limit(options.limit);
        return await query.exec();
    },

    findOne: async (collection, conditions = {}, options = {}) => {
        let query = collection.findOne(conditions);
        if (options && options.projection) query = query.select(options.projection);
        if (options && options.sort) query = query.sort(options.sort);
        return await query.exec();
    },

    updateOne: async (collection, filter, update, options = {}) => await collection.updateOne(filter, update, options),

    updateMany: async (collection, filter, update, options = {}) => await collection.updateMany(filter, update, options),

    deleteOne: async (collection, filter) => await collection.deleteOne(filter),

    deleteMany: async (collection, filter) => await collection.deleteMany(filter),

    findOneAndUpdate: async (collection, conditions, update, options = {}) => await collection.findOneAndUpdate(conditions, update, options),

    findOneAndDelete: async (collection, conditions) => await collection.findOneAndDelete(conditions),

    createDocument: (collection, body) => {
        const document = new collection(body);
        return document;
    },

    countDocuments: async (collection, filter) => await collection.where(filter).countDocuments(),

    aggregate: async (collection, options) => await collection.aggregate(options)
};
