import * as client from 'phonegap-build-api';
import * as yargs from 'yargs';

const cliArguments: any = yargs.argv;

const options = {
    form: {
        data: {
            pull: true,
            build_count: null
        }
    }
};

if (cliArguments.b) {
    options.form.data.build_count = cliArguments.b as number;
}

client.auth({token: cliArguments.t}, function (e, api) {
    api.put('/apps/2798685', options, (e, data) => {
        console.log('error:', e);
        console.log('data:', data);
    });
});
