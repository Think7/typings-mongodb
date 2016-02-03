// Type definitions for node-mongodb-native
import {Promise} from "es6-promise";

// Class documentation : http://mongodb.github.io/node-mongodb-native/2.1/api/MongoClient.html
export interface MongoClientConnectOptions {
    uri_decode_auth?: boolean;
    db?: Object;
    server?: Object;
    replSet?: Object;
    mongos?: Object;
    promiseLibrary?: Object;
}

export interface MongoClientConnectCallback {
    (error: MongoError, db: Db): void;
}

export declare class MongoClient {
    public static connect(uri: string, options?: MongoClientConnectOptions): Promise<Db>;

    public static connect(uri: string,
                          options: MongoClientConnectOptions,
                          callback: MongoClientConnectCallback): void;
}

// TODO: Update this.
export class Server {}
export class ReplSet {}
export class Mongos {}
export class Admin {}
export class CommandCursor {}

export class ReadPreference {
    public static PRIMARY: string;
    public static PRIMARY_PREFERRED: string;
    public static SECONDARY: string;
    public static SECONDARY_PREFERRED: string;
    public static NEAREST: string;

    public mode: string;
    public tags: Object;

    constructor(mode: string, tags: Object);
}

export interface DbCollectionFetchOptions {
    w?: number | string;
    wtimeout?: number;
    j?: boolean;
    raw?: boolean;
    pkFactory?: Object;
    readPreference?: ReadPreference | string;
    serializeFunctions?: boolean;
    strict?: boolean;
    readConcern?: Object;
}

export interface DbAddUserOptions {
    w?: string | number;
    wtimeout?: number;
    j?: boolean;
    customData?: Object;
    roles?: Array<Object>;
}

export interface DbCreateCollectionOptions {
    w?: number | string;
    wtimeout?: number;
    j?: boolean;
    raw?: boolean;
    pkFactory?: Object;
    readPreference?: ReadPreference | string;
    serializeFunctions?: boolean;
    strict?: boolean;
    capped?: boolean;
    size?: number;
    max?: number;
    autoIndexId?: boolean;
}

export interface DbCreateDbOptions {
    noListener: boolean;
    returnNonCachedInstance: boolean;
}

export interface DbExecuteDbCommandOptions {
    readPreference?: ReadPreference | string;
    maxTimeMS?: number;
}

export interface DbIndexInformationOptions {
    full?: boolean;
    readPreference?: ReadPreference | string;
}

export interface DbListCollectionsOptions {
    batchSize: number;
    readPreference?: ReadPreference | string;
}

export interface DbRemoveUserOptions extends CollectionSaveDeleteOptions {}

export class Db {
    public serverConfig: Server | ReplSet | Mongos;
    public bufferMaxEntries: number;
    public databaseName: string;
    public options: Object;
    public native_parser: boolean;
    public slaveOk: boolean;
    public writeConcern: Object;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#addUser
    public addUser(username: string, password: string, options?: DbAddUserOptions): Promise<any>;
    public addUser(username: string, password: string, options: DbAddUserOptions, callback: MongoCallback<Object>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#admin
    public admin(): Admin;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#authenticate
    public authenticate(username: string, password: string, options?: string): Promise<any>
    public authenticate(username: string, password: string, options: string, callback: MongoCallback<Object>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#close
    public close(force?: boolean): Promise<any>;
    public close(force: boolean, callback: MongoCallback<void>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#collection
    public collection(name: string, options?: DbCollectionFetchOptions): Collection;
    public collection(name: string, options: DbCollectionFetchOptions, callback: MongoCallback<Collection>): void

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#collections
    public collections(): Promise<Array<Collection>>;
    public collections(callback: MongoCallback<Array<Collection>>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#command
    public command(command: Object, options?: {readPreference: ReadPreference | string}): Promise<any>;
    public command(command: Object, options: {readPreference: ReadPreference | string}, callback: MongoCallback<Object>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#createCollection
    public createCollection(name: string, options?: DbCreateCollectionOptions): Promise<Collection>;
    public createCollection(name: string, options: DbCreateCollectionOptions, callback: MongoCallback<Collection>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#createIndex
    public createIndex(name: string, fieldOrSpec: Object,
                       options?: MongoIndexOptions): Promise<any>;

    public createIndex(name: string, fieldOrSpec: Object,
                       options: MongoIndexOptions, callback: MongoCallback<Object>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#db
    public db(name: string, options: DbCreateDbOptions): Db;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#dropCollection
    public dropCollection(name: string): Promise<any>;
    public dropCollection(name: string, callback: MongoCallback<Object>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#dropDatabase
    public dropDatabase(): Promise<Object>;
    public dropDatabase(callback: MongoCallback<Object>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#executeDbAdminCommand
    public executeDbAdminCommand(command: Object, options?: DbExecuteDbCommandOptions): Promise<any>;
    public executeDbAdminCommand(command: Object, options: DbExecuteDbCommandOptions, callback: MongoCallback<Object>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#indexInformation
    public indexInformation(name: string,
                            options?: DbIndexInformationOptions): Promise<any>;

    public indexInformation(name: string, options: DbIndexInformationOptions,
                            callback: MongoCallback<Object>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#listCollections
    public listCollections(filter: Object, options?: DbListCollectionsOptions): CommandCursor;


    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#logout
    public logout(options?: { dbName: string }): Promise<any>;
    public logout(options: { dbName: string }, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#open
    public open(): Promise<Db>;
    public open(callback: MongoCallback<Db>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#removeUser
    public removeUser(username: string, options?: DbRemoveUserOptions): Promise<any>;
    public removeUser(username: string, options: DbRemoveUserOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#renameCollection
    public renameCollection(fromCollection: string,
                            toCollection: string,
                            options?: CollectionRenameOptions): Promise<any>;

    public renameCollection(fromCollection: string,
                            toCollection: string,
                            options: CollectionRenameOptions,
                            callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Db.html#stats
    public stats(options?: { scale: number }): Promise<any>;
    public stats(options: { scale: number }, callback: MongoCallback<any>): void;

    public on(anEvent: string, callback: Function): void;
}

// Class Documentation: http://mongodb.github.io/node-mongodb-native/2.1/api/ObjectID.html
export class ObjectID {
    constructor(s?: string);

    // Creates an ObjectID from a second based number, with the rest of the
    // ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
    // time – an integer number representing a number of seconds.
    public static createFromTime(time: number): ObjectID;

    // Creates an ObjectID from a hex string representation of an ObjectID.
    // hexString – create a ObjectID from a passed in 24 byte hexstring.
    public static createFromHexString(hexString: string): ObjectID;

    // Checks if a value is a valid bson ObjectId
    // id - Value to be checked
    public static isValid(id: string): Boolean;

    // Returns the generation date (accurate up to the second) that this ID was generated.
    public getTimestamp(): Date;

    // Returns the ObjectID id as a 24 byte hex string representation
    public toHexString(): string;

    // Compares the equality of this ObjectID with otherID.
    public equals(otherID: ObjectID): boolean;

    // Generate a 12 byte id string used in ObjectID's
    // time - optional parameter allowing to pass in a second based timestamp
    public generate(time?: number): string;
}

// Class documentation : http://mongodb.github.io/node-mongodb-native/api-bson-generated/binary.html
export class Binary {
    constructor(buffer: Buffer, subType?: number);

    // Updates this binary with byte_value
    public put(byte_value: any): void;

    // Writes a buffer or string to the binary
    public write(buffer: any, offset: number): void;

    // Reads length bytes starting at position.
    public read(position: number, length: number): Buffer;

    // Returns the value of this binary as a string.
    public value(): string;

    // The length of the binary.
    public length(): number;
}

export interface SocketOptions {
    // = set seconds before connection times out default:0
    timeout?: number;
    // = Disables the Nagle algorithm default:true
    noDelay?: boolean;
    // = Set if keepAlive is used default:0 , which means no keepAlive, set higher than 0 for keepAlive
    keepAlive?: number;
    // = ‘ascii’|’utf8’|’base64’ default:null
    encoding?: string;
}

export interface ServerOptions {
    // - to reconnect automatically, default:false
    auto_reconnect?: boolean;
    // - specify the number of connections in the pool default:1
    poolSize?: number;
    // - a collection of pr socket settings
    socketOptions?: any;
}

export interface PKFactory {
    counter: number;
    createPk: () => number;
}

// See : http://mongodb.github.io/node-mongodb-native/api-generated/db.html
// Current definition by documentation version 1.3.13 (28.08.2013)
export interface DbCreateOptions {
    //  the write concern for the operation where < 1 is no acknowlegement of write and w >= 1, w = ‘majority’ or tag acknowledges the write.
    w?: any;

    // set the timeout for waiting for write concern to finish (combines with w option).
    wtimeout?: number;

    //  write waits for fsync before returning. default:false.
    fsync?: boolean;

    // write waits for journal sync before returning. default:false.
    journal?: boolean;

    // the prefered read preference. use 'ReadPreference' class.
    readPreference?: string;

    // use c++ bson parser. default:false.
    native_parser?: boolean;

    // force server to create _id fields instead of client. default:false.
    forceServerObjectId?: boolean;

    // custom primary key factory to generate _id values (see Custom primary keys).
    pkFactory?: PKFactory;

    // serialize functions. default:false.
    serializeFunctions?: boolean;

    // peform operations using raw bson buffers. default:false.
    raw?: boolean;

    // record query statistics during execution. default:false.
    recordQueryStats?: boolean;

    // number of miliseconds between retries. default:5000.
    retryMiliSeconds?: number;

    // number of retries off connection. default:5.
    numberOfRetries?: number;

    // an object representing a logger that you want to use, needs to support functions debug, log, error. default:null.
    logger?: Object

    // force setting of SlaveOk flag on queries (only use when explicitly connecting to a secondary server). default:null.
    slaveOk?: number;

    // when deserializing a Long will fit it into a Number if it’s smaller than 53 bits. default:true.
    promoteLongs?: boolean;
}

// See : http://mongodb.github.io/node-mongodb-native/api-generated/collection.html
// Current definition by documentation version 1.3.13 (28.08.2013)
export interface CollectionCreateOptions {
    // the prefered read preference. use 'ReadPreference' class.
    readPreference?: string;

    // Allow reads from secondaries. default:false.
    slaveOk?: boolean;

    // serialize functions on the document. default:false.
    serializeFunctions?: boolean;

    // perform all operations using raw bson objects. default:false.
    raw?: boolean;

    // object overriding the basic ObjectID primary key generation.
    pkFactory?: PKFactory;
}

// Documentation: http://docs.mongodb.org/manual/reference/command/collStats/
export interface CollStats {
    // Namespace.
    ns: string;

    // Number of documents.
    count: number;

    // Collection size in bytes.
    size: number;

    // Average object size in bytes.
    avgObjSize: number;

    // (Pre)allocated space for the collection in bytes.
    storageSize: number;

    // Number of extents (contiguously allocated chunks of datafile space).
    numExtents: number;

    // Number of indexes.
    nindexes: number;

    // Size of the most recently created extent in bytes.
    lastExtentSize: number;

    // Padding can speed up updates if documents grow.
    paddingFactor: number;
    flags: number;

    // Total index size in bytes.
    totalIndexSize: number;

    // Size of specific indexes in bytes.
    indexSizes: {
        _id_: number;
        username: number;
    };
}

export interface MongoCallback<T> {
    (error: MongoError, result: T): void;
}

type AnyArray = Array<any>;
type DocumentArray = Array<Object>;
type StringArray = Array<string>;

interface ToArrayResultCallback {
    (error: MongoError, documents: DocumentArray): void;
}

export interface CollectionInsertOptions {
    // The write concern.
    w?: number | string;
    // The write concern timeout.
    wtimeout?: number;
    // Specify a journal write concern.
    j?: boolean;
    // Serialize functions on any object.
    serializeFunctions?: boolean;
    // Execute write operation in ordered or unordered fashion.
    forceServerObjectId?: boolean;
    // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean;
}

export interface CollectionSaveDeleteOptions {
    // The write concern.
    w?: number | string;

    // The write concern timeout.
    wtimeout?: number;

    // Specify a journal write concern.
    j?: boolean;
}

export interface CollectionRenameOptions {
    // Drop the target name collection if it previously exists.
    dropTarget?: boolean;
}

export interface CollectionUpdateOptions {
    // Update operation is an upsert.
    upsert?: boolean;

    // The write concern.
    w?: number | string;

    // The write concern timeout.
    wtimeout?: number;

    // Specify a journal write concern.
    j?: boolean;

    // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean;
}

export class CollectionReadPreference {
    public mode: string;
    public tags: Object;

    public static isValid(): boolean;

    constructor(mode: string, tags: Object);
    public isValid(mode: string): boolean;
}

export interface CollectionDistinctOptions {
    readPreference: CollectionReadPreference | string;
}

export interface MongoCountPreferences {
    // The limit of documents to count.
    limit?: number;
    // The number of documents to skip for the count.
    skip?: boolean;
    // An index name hint for the query.
    hint?: string;

    readPreference?: CollectionReadPreference | string;
}

export interface MongoDeleteOptions {
    // Limits the fields to return for all matching documents.
    projection?: Object;
    // Determines which document the operation modifies if the query selects multiple documents.
    sort?: Object;
    // The maximum amount of time to allow the query to run.
    maxTimeMS?: number;
}

export interface MongoFindUpdateReplaceOptions {
    // Limits the fields to return for all matching documents.
    projection?: Object;
    // Determines which document the operation modifies if the query selects multiple documents.
    sort?: Object;
    // The maximum amount of time to allow the query to run.
    maxTimeMS?: number;
    // Upsert the document if it does not exist.
    upsert?: boolean;
    // When false, returns the updated document rather than the original. The default is true.
    returnOriginal?: boolean;
}

export interface MongoIndexOptions {
    // The write concern.
    w?: number | string;
    // The write concern timeout.
    wtimeout?: number;
    // Specify a journal write concern.
    j?: boolean;
    // Creates an unique index.
    unique?: boolean;
    // Creates a sparse index.
    sparse?: boolean;
    // Creates the index in the background, yielding whenever possible.
    background?: boolean;
    // A unique index cannot be created on a key that has pre-existing duplicate values.
    // If you would like to create the index anyway, keeping the first document the database indexes and
    // deleting all subsequent documents that have duplicate value
    dropDups?: boolean;
    // For geo spatial indexes set the lower bound for the co-ordinates.
    min?: number;
    // For geo spatial indexes set the high bound for the co-ordinates.
    max?: number;
    // Specify the format version of the indexes.
    v?: number;
    // Allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)
    expireAfterSeconds?: number;
    // Override the auto generated index name (useful if the resulting name is larger than 128 bytes)
    name?: number;
}

export interface CollectionGeoNearOptions {
    readPreference?: CollectionReadPreference | string;
    num?: number;
    minDistance?: number;
    maxDistance?: number;
    distanceMultiplier?: number;
    query?: Object;
    spherical?: boolean;
    uniqueDocs?: boolean;
    includeLocs?: boolean;
}

export interface CollectionGeoHaystackSearchOptions {
    readPreference?: CollectionReadPreference | string;
    maxDistance?: number;
    search?: Object;
    limit?: number;
}

export interface CollectionAggregationOptions {
    readPreference?: CollectionReadPreference | string;
    // Return the query as cursor, on 2.6 > it returns as a real cursor
    // on pre 2.6 it returns as an emulated cursor.
    cursor?: { batchSize: number };
    // Explain returns the aggregation execution plan (requires mongodb 2.6 >).
    explain?: boolean;
    // lets the server know if it can use disk to store
    // temporary results for the aggregation (requires mongodb 2.6 >).
    allowDiskUse?: boolean;
    // specifies a cumulative time limit in milliseconds for processing operations
    // on the cursor. MongoDB interrupts the operation at the earliest following interrupt point.
    maxTimeMS?: boolean;
    // Allow driver to bypass schema validation in MongoDB 3.2 or higher.
    bypassDocumentValidation?: boolean;
}

export interface CollectionFindOptions {
    limit?: number;
    sort?: any;
    fields?: Object;
    skip?: number;
    hint?: Object;
    explain?: boolean;
    snapshot?: boolean;
    timeout?: boolean;
    tailtable?: boolean;
    tailableRetryInterval?: number;
    numberOfRetries?: number;
    awaitdata?: boolean;
    oplogReplay?: boolean;
    exhaust?: boolean;
    batchSize?: number;
    returnKey?: boolean;
    maxScan?: number;
    min?: number;
    max?: number;
    showDiskLoc?: boolean;
    comment?: String;
    raw?: boolean;
    readPreference?: String;
    partial?: boolean;
}

export interface MongoCollectionOptions {
    safe?: any;
    serializeFunctions?: any;
    strict?: boolean;
    raw?: boolean;
    pkFactory?: any;
    readPreference?: string;
}

// This is for collection.bulkWrite()
// NOT for OrderedBulkOperation/UnorderedBulkOperation.execute()
export interface BulkWriteOpResultObject {
    insertedCount: number;
    matchedCount: number;
    modifiedCount: number;
    deletedCount: number;
    upsertedCount: number;
    insertedIds: Object;
    upsertedIds: Object;
    result: Object;
}

export interface CollectionInitializeBulkOpOptions {
    w?: number | string;
    wtimeout?: number;
    j?: boolean;
}

interface BulkOperationExecuteOptions {
    w?: boolean;
    wtimeout?: number;
    j?: boolean;
    fsync?: boolean;
}

class FindOperatorsUnordered {
    public remove(): UnorderedBulkOperation;
    public removeOne(): UnorderedBulkOperation;
    public replaceOne(document: Object): UnorderedBulkOperation;
    public update(document: Object): UnorderedBulkOperation;
    public updateOne(document: Object): UnorderedBulkOperation;
    public upsert(): FindOperatorsUnordered;
}

class OrderedBulkOperation {
    public length: number;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/OrderedBulkOperation.html#execute
    public execute(options?: BulkOperationExecuteOptions): Promise<BulkWriteResult>;
    public execute(options: BulkOperationExecuteOptions, callback: MongoCallback<BulkWriteResult>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/OrderedBulkOperation.html#find
    public find(selector: Object): FindOperatorsOrdered;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/OrderedBulkOperation.html#insert
    public insert(document: Object): OrderedBulkOperation;
}

class FindOperatorsOrdered {
    public delete(): OrderedBulkOperation;
    public deleteOne(): OrderedBulkOperation;
    public replaceOne(document: Object): OrderedBulkOperation;
    public update(document: Object): OrderedBulkOperation;
    public updateOne(document: Object): OrderedBulkOperation;
    public upsert(): FindOperatorsOrdered;
}

export class UnorderedBulkOperation {
    // http://mongodb.github.io/node-mongodb-native/2.1/api/UnorderedBulkOperation.html#execute
    public execute(options?: BulkOperationExecuteOptions): Promise<BulkWriteResult>;
    public execute(options: BulkOperationExecuteOptions, callback: MongoCallback<BulkWriteResult>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/UnorderedBulkOperation.html#find
    public find(selector: Object): FindOperatorsUnordered;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/UnorderedBulkOperation.html#insert
    public insert(document: Object): UnorderedBulkOperation;
}

export class WriteError {
    public code: number;
    public index: number;
    public errmsg: string;
}

export class WriteConcernError {
    public code: number;
    public errmsg: string;
}

export class BulkWriteResult {
    public ok: boolean;
    public nInserted: number;
    public nUpdated: number;
    public nUpserted: number;
    public nModified: number;
    public nRemoved: number;

    public getInsertedIds(): Array<Object>;
    public getLastOp(): Object;
    public getRawResponse(): Object;
    public getUpsertedIdAt(index: number): Object;
    public getUpsertedIds(): Array<Object>;
    public getWriteConcernError(): WriteConcernError;
    public getWriteErrorAt(): WriteError;
    public getWriteErrorCount(): number;
    public getWriteErrors(): Array<Object>;
    public hasWriteErrors(): boolean;
}

// Documentation : http://mongodb.github.io/node-mongodb-native/api-generated/collection.html
export class Collection {
    // Get the collection name.
    public collectionName: string;
    // Get the full collection namespace.
    public namespace: string;
    // The current write concern values.
    public writeConcern: Object;
    // The current read concern values.
    public readConcern: Object;
    // Get current index hint for collection.
    public hint: Object;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#aggregate
    public aggregate(pipeline: Array<any>, options?: CollectionAggregationOptions): AggregationCursor;
    public aggregate(pipeline: Array<any>, options: CollectionAggregationOptions, callback: MongoCallback<any>): void;
    public aggregate(): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#bulkWrite
    public bulkWrite(operations: Array<Object>,
                     options?: CollectionInsertOptions): Promise<BulkWriteOpResultObject>;

    public bulkWrite(operations: Array<Object>,
                     options: CollectionInsertOptions,
                     callback: MongoCallback<BulkWriteOpResultObject>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insertOne
    public insertOne(doc: Object, options?: CollectionInsertOptions): Promise<any>;
    public insertOne(doc: Object, options: CollectionInsertOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#insertMany
    public insertMany(docs: DocumentArray, options?: CollectionInsertOptions): Promise<any>;
    public insertMany(docs: DocumentArray, options: CollectionInsertOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#initializeOrderedBulkOp
    public initializeOrderedBulkOp(options?: CollectionInitializeBulkOpOptions): OrderedBulkOperation;

    // http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#initializeUnorderedBulkOp
    public initializeUnorderedBulkOp(options?: CollectionInitializeBulkOpOptions): UnorderedBulkOperation;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#deleteOne
    public deleteOne(filter: Object, options?: CollectionSaveDeleteOptions): Promise<any>;
    public deleteOne(filter: Object, options: CollectionSaveDeleteOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#deleteMany
    public deleteMany(filter: Object, options?: CollectionSaveDeleteOptions): Promise<any>;
    public deleteMany(filter: Object, options: CollectionSaveDeleteOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#rename
    public rename(newName: string, options?: CollectionRenameOptions): Promise<any>;
    public rename(newName: string, options: CollectionRenameOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#updateOne
    public updateOne(filter: Object, update: Object, options?: CollectionUpdateOptions): Promise<any>;
    public updateOne(filter: Object, update: Object, options: CollectionUpdateOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#updateMany
    public updateMany(filter: Object, update: Object): Promise<any>;
    public updateMany(filter: Object, update: Object, options: CollectionUpdateOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#distinct
    public distinct(key: string, query: Object, options?: CollectionDistinctOptions): Promise<any>;
    public distinct(key: string, query: Object, options: CollectionDistinctOptions, callback: MongoCallback<any>): void

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#count
    public count(query: Object, options?: MongoCountPreferences): Promise<any>;
    public count(query: Object, options: MongoCountPreferences, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#drop
    public drop(): Promise<any>;
    public drop(callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndDelete
    public findOneAndDelete(filter: Object, options?: MongoDeleteOptions): Promise<any>;
    public findOneAndDelete(filter: Object, options: MongoDeleteOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndReplace
    public findOneAndReplace(filter: Object, replacement: Object, options?: MongoFindUpdateReplaceOptions): Promise<any>;

    public findOneAndReplace(filter: Object, replacement: Object,
                             options: MongoFindUpdateReplaceOptions,
                             callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndUpdate
    public findOneAndUpdate(filter: Object, update: Object, options?: MongoFindUpdateReplaceOptions): Promise<any>;
    public findOneAndUpdate(filter: Object, update: Object, options: MongoFindUpdateReplaceOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#find
    public find(query: Object): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#createIndex
    public createIndex(fieldOrSpec: string | Object, options?: MongoIndexOptions): Promise<any>;
    public createIndex(fieldOrSpec: string | Object, options: MongoIndexOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#ensureIndex
    public ensureIndex(fieldOrSpec: string | Object, options?: MongoIndexOptions): Promise<any>;
    public ensureIndex(fieldOrSpec: string | Object, options: MongoIndexOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#indexInformation
    public indexInformation(options?: { full: boolean }): Promise<any>;
    public indexInformation(options: { full: boolean }, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#dropIndex
    public dropIndex(indexName: string, options?: CollectionSaveDeleteOptions): Promise<any>;
    public dropIndex(indexName: string, options: CollectionSaveDeleteOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#dropIndexes
    public dropIndexes(): Promise<any>;
    public dropIndexes(callback?: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#reIndex
    public reIndex(): Promise<any>;
    public reIndex(callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#mapReduce
    public mapReduce(map: Function | string, reduce: Function | string, options?: MapReduceOptions): Promise<any>;
    public mapReduce(map: Function | string, reduce: Function | string, options: MapReduceOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#group
    public group(
        keys: Object | Array<any> | Function | Code,
        condition: Object, initial: Object,
        reduce: Function | Code, finalize: Function | Code,
        command: boolean,
        options: CollectionReadPreference,
        callback: MongoCallback<any>
    ): void;

    public group(
        keys: Object | Array<any> | Function | Code,
        condition: Object, initial: Object,
        reduce: Function | Code, finalize: Function | Code,
        command: boolean,
        options?: CollectionReadPreference
    ): Promise<any>;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#options
    public options(): Promise<any>;
    public options(callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#isCapped
    public isCapped(): Promise<any>;
    public isCapped(callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#indexExists
    public indexExists(indexes: string | StringArray): Promise<any>;
    public indexExists(indexes: string | StringArray, callback: Function): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#geoNear
    public geoNear(x: number, y: number, options?: CollectionGeoNearOptions): Promise<any>;
    public geoNear(x: number, y: number, options: CollectionGeoNearOptions, callback: Function): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#geoHaystackSearch
    public geoHaystackSearch(x: number, y: number, options?: CollectionGeoHaystackSearchOptions): Promise<any>;
    public geoHaystackSearch(x: number, y: number, options: CollectionGeoHaystackSearchOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#indexes
    public indexes(): Promise<any>;
    public indexes(callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#stats
    public stats(options: { scale: number }): Promise<any>;
    public stats(options: { scale: number }, callback: MongoCallback<any>): void;
}

export interface MapReduceOptions {
    out?: Object;
    query?: Object;
    sort?: Object;
    limit?: number;
    keeptemp?: boolean;
    finalize?: any;
    scope?: Object;
    jsMode?: boolean;
    verbose?: boolean;
    readPreference?: string;
}

export interface Code {
    code: string | Function;
    scope?: Object;
}

export interface CursorCommentOptions {
    skip?: number;
    limit?: number;
    maxTimeMS?: number;
    hint?: CollectionReadPreference | string;
}

export interface MongoError {
    message: string;
    create(options: Object): MongoError;
}

export interface MongoIteratorCallback {
    (doc: Object): void;
}

export interface MongoEndCallback {
    (error: MongoError): void;
}

export class Writable { }
export class Stream { }

export class Readable {
    public destination: Writable;
    public options: Object;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#pause
    public pause(): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#pipe
    public pipe(): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#project
    public project(value: any): this;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#read
    public read(size: number): string | Buffer | void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#resume
    public resume(): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#setEncoding
    public setEncoding(encoding: string): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#unpipe
    public unpipe(destination?: Writable): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#unshift
    public unshift(stream: Buffer | string): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/external-Readable.html#unshift
    public wrap(stream: Stream): void;
}

export var CursorEvent: {
    close: void;
    data: Object;
    end: void;
    readable: void;
};

export class Cursor extends Readable {
    public sortValue: string;
    public timeout: boolean;
    public readPreference: CollectionReadPreference;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#addCursorFlag
    public addCursorFlag(flag: string, value: boolean): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#addQueryModifier
    public addQueryModifier(name: string, value: boolean): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#batchSize
    public batchSize(value: number): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#clone
    public clone(): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#close
    public close(): Promise<any>;
    public close(callback: MongoCallback<any>): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#comment
    public comment(): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#count
    public count(applySkipLimit: boolean, options?: CursorCommentOptions): Promise<any>;
    public count(applySkipLimit: boolean, options: CursorCommentOptions, callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#explain
    public explain(): Promise<any>;
    public explain(callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#forEach
    // NOTE:
    // The return value specified in the docs as {null}.
    // Not sure what this is, So for now it's void.
    public forEach(iterator: MongoIteratorCallback, callback: MongoEndCallback): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#hasNext
    public hasNext(): Promise<any>;
    public hasNext(callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#hint
    public hint(hint: Object): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#isClosed
    public isClosed(): boolean;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#limit
    public limit(value: number): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#map
    public map(transform: Function): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#max
    public max(value: number): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#maxScan
    public maxScan(maxScan: Object): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#maxTimeMS
    public maxTimeMS(value: number): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#min
    public min(value: number): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#next
    public next(): Promise<any>;
    public next(callback: MongoCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#next
    public returnKey(returnKey: Object): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#setCursorOption
    public setCursorOption(field: string, value: Object): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#setReadPreference
    public setReadPreference(readPreference: string | CollectionReadPreference): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#showRecordId
    public showRecordId(showRecordId: Object): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#skip
    public skip(value: number): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#snapshot
    public snapshot(snapshot: Object): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
    public sort(keyOrList: string | Array<any> | Object, direction: number): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#stream
    public stream(options: Object): Cursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#toArray
    public toArray(): Promise<any>;
    public toArray(callback: ToArrayResultCallback): void;

    // This method is in the docs but the link is broken.
    public rewind(): Cursor;
}

// http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#~endCallback
export interface AggregationCursorEndCallback {
    (error: MongoError): void;
}

// http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#~iteratorCallback
export interface AggregationCursorIteratorCallback<T> {
    (doc: T): void;
}

// http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#~resultCallback
export interface AggregationCursorResultCallback<T> {
    (error: MongoError, result: T): void;
}

// http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#~toArrayResultCallback
export interface AggregationCursorToArrayResultCallback<T> {
    (error: MongoError, result: T[]): void;
}

export class AggregationCursor extends Readable {
    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#batchSize
    public batchSize(value: number): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#clone
    public clone(): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#close
    public close(callback: AggregationCursorResultCallback<any>): void;
    public close(): Promise<any>;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#each
    public each(callback: AggregationCursorResultCallback<any>): void;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#explain
    public explain(callback: AggregationCursorResultCallback<any>): void;
    public explain(): Promise<any>;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#geoNear
    public geoNear(document: any): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#group
    public group(document: any): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#isClosed
    public isClosed(): boolean;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#limit
    public limit(value: number): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#match
    public match(document: any): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#maxTimeMS
    public maxTimeMS(value: number): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#next
    public next(callback: AggregationCursorResultCallback<any>): void;
    public next(): Promise<any>;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#out
    public out(destination: number): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#returnKey
    public redact(document: any): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#rewind
    public rewind(): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#skip
    public skip(value: number): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#sort
    public sort(document: any): AggregationCursor;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#toArray
    public toArray(callback: AggregationCursorResultCallback<any>): void;
    public toArray(): Promise<any>;

    // http://mongodb.github.io/node-mongodb-native/2.0/api/AggregationCursor.html#unwind
    public unwind(field: number): AggregationCursor;
}

// Class documentation : http://mongodb.github.io/node-mongodb-native/api-generated/cursorstream.html
// Last update: doc. version 1.3.13 (29.08.2013)
export class CursorStream {
    public pause(): any;
    public resume(): any;
    public destroy(): any;
}

