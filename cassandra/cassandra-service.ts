import cassandra from 'cassandra-driver';

export class CassandraService {

    private client: cassandra.Client;

    constructor() {
        this.client = new cassandra.Client({ contactPoints: ['h1', 'h2'], localDataCenter: 'datacenter1', keyspace: 'ks1' });


    }

    public query() : void {
        console.log('About to query Cassandra');
        // const query = 'SELECT name, email FROM users WHERE key = ?';
        const query = 'SELECT cluster_name, listen_address FROM system.local';
        this.client.execute(query)
            .then(result => console.log('User with email %s', result.rows[0].cluster_name));
    }
}