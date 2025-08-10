import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodePropertyOptions = {
	name: 'Issues',
	value: 'mantisIssuesVerb',
};

export const enum Operations {
	GetAnIssue = 'getAnIssue',
	GetIssueFiles = 'getIssueFiles',
	GetIssueFile = 'getIssueFile',
	GetAllIssues = 'getAllIssues',
	CreateAnIssueMinimal = 'createAnIssueMinimal',
	CreateAnIssue = 'createAnIssue',
	CreateAnIssueWithAttachments = 'createAnIssueWithAttachments',
	UpdateAnIssueMinimal = 'updateAnIssueMinimal',
	UpdateAnIssue = 'updateAnIssue',
	DeleteAnIssue = 'deleteAnIssue',
	MonitorAnIssue = 'monitorAnIssue',
	MonitorAnIssueForSpecifiedUsers = 'monitorAnIssueForSpecifiedUsers',
	AttachTagToIssue = 'attachTagToIssue',
	DetachTagFromAnIssue = 'detachTagFromAnIssue',
	AddAnIssueRelationship = 'addAnIssueRelationship',
	DeleteAnIssueRelationship = 'deleteAnIssueRelationship',
}

export const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [resource.value],
			},
		},
		options: [
			{
				name: 'Get An Issue',
				value: Operations.GetAnIssue,
				action: 'Get an issue',
				routing: {
					request: {
						method: 'GET',
						url: '/issues/{{ $parameter.issueId }}',
						qs: {
							select_fields: '={{ $parameter.selectFields || "" }}',
						},
					},
				},
			},
			{
				name: 'Get Issue Files',
				value: Operations.GetIssueFiles,
				action: 'Get issue files',
				routing: {
					request: {
						method: 'GET',
						url: '/issues/{{ $parameter.issueId }}/files',
					},
				},
			},
			{
				name: 'Get Issue File',
				value: Operations.GetIssueFile,
				action: 'Get issue file',
				routing: {
					request: {
						method: 'GET',
						url: '/issues/{{ $parameter.issueId }}/files/{{ $parameter.fileId }}',
					},
				},
			},
			{
				name: 'Get All Issues',
				value: Operations.GetAllIssues,
				action: 'Get all issues',
				routing: {
					request: {
						method: 'GET',
						url: '/issues',
						qs: {
							page_size: '={{ $parameter.pageSize }}',
							page_number: '={{ $parameter.pageNumber }}',
							select_fields: '={{ $parameter.selectFields || "" }}',
							filter: '={{ $parameter.filter || "" }}',
							project_id: '={{ $parameter.projectId || "" }}',
						},
					},
				},
			},
		],
		default: Operations.GetAllIssues.toString(),
	},
];

export default {
	resource: resource,
	operations: operations,
};
