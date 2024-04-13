export interface IRuntimeEnvironment {
	SITE_BASE_URL: string;
}

export type Environment = Partial<IRuntimeEnvironment>;

const environment: Environment = {};

export const addToEnvironment = (data: IRuntimeEnvironment): void => {
	Object.assign(environment, data);
};

export default environment;
