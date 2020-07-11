
	const isPromiseSupported = typeof Promise === 'function';

	/* export default */ class PromiseLike {

		constructor( executor ) {

			let callback = () => {};
			const resolve = () => {

				callback();

			};

			executor( resolve );

			return {
				then( _callback ) {

					callback = _callback;

				}
			};

		}

	};


