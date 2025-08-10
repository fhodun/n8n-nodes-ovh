import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';
import { ovhVerbsResources, ovhVerbsOperations } from './Operations';
import { options } from './options';

export class Ovh implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH',
		name: 'ovh',
		icon: 'file:ovh.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'Consume OVH API',
		defaults: {
			name: 'OVH',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'ovhApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'http://localhost:8989/api/rest',
			url: '={{$credentials.baseUrl}}/api/rest',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: '={{ $credentials.apiToken }}',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: ovhVerbsResources,
				default: 'mantisIssueVerb',
			},
			...options,
			...ovhVerbsOperations,
		],
	};
}
