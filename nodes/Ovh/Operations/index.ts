import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

import Issues from './Me';

const verbs = [
	Issues,
];

export const ovhVerbsResources: INodePropertyOptions[] = verbs.flatMap((verb) => verb.resource);

export const ovhVerbsOperations: INodeProperties[] = verbs.flatMap((verb) => verb.operations);
