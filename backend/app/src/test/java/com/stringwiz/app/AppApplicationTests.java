package com.stringwiz.app;

import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AppApplicationTests {
	@Value("${JIRA_API_EMAIL}")
	private String jira_email;
	@Value("${JIRA_API_DOMAIN}")
	private String jira_domain;
	@Value("${JIRA_API_ISSUE_ID}")
	private String jira_issue_id;
	@Value("${JIRA_API_PERSONAL_TOKEN}")
	private String jira_personal_token;
	@Test
	void contextLoads() throws Exception {
		HttpResponse<JsonNode> response = Unirest.get("https://" + jira_domain + ".atlassian.net/rest/api/3/issue/" + jira_issue_id)
				.basicAuth(jira_email, jira_personal_token)
				.header("Accept", "application/json")
				.asJson();

		// Handle the response
		System.out.println(response.getStatus());
		System.out.println(response.getBody());
	}

}
