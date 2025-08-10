import { INodeProperties } from 'n8n-workflow';

import { ovhVerbsResources } from './Operations';

import { Operations as MeOperations } from './Operations/Me';

const allResourceValues: (string | number | boolean)[] = ovhVerbsResources.map(
	(resource) => resource.value,
);

export const enum Options {
	IssueId = 'issueId',
}

export const options: INodeProperties[] = [
	{
		displayName: 'Issue ID',
		name: Options.IssueId,
		type: 'number',
		default: null,
		description: 'ID of the issue',
		displayOptions: {
			show: {
				operation: [
					MeOperations.GetAnIssue,
				],
				resource: allResourceValues,
			},
		},
	},
];
