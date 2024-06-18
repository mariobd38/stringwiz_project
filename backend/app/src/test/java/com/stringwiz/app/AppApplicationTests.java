package com.stringwiz.app;

import com.asana.models.Task;
import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import com.asana.Client;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AppApplicationTests {
	@Value("${JIRA_API_EMAIL}")
	private String jira_email;
	@Value("${JIRA_API_DOMAIN}")
	private String jira_domain;
	@Value("${JIRA_API_ISSUE_ID}")
	private String jira_issue_id;
	@Value("${JIRA_API_TASK_ID}")
	private String jira_task_id;
	@Value("${JIRA_API_PERSONAL_TOKEN}")
	private String jira_personal_token;
	@Value("${ASANA_API_PERSONAL_TOKEN}")
	private String asana_personal_token;

	@Test
	void contextLoads() throws Exception {
		HttpResponse<JsonNode> response = Unirest.get("https://" + jira_domain + ".atlassian.net/rest/api/3/issue/" + jira_issue_id)
				.basicAuth(jira_email, jira_personal_token)
				.header("Accept", "application/json")
				.asJson();

		// Handle the response


		Client client = Client.accessToken(asana_personal_token);

		Task result = client.tasks.getTask(jira_task_id)
				.option("pretty", true)
				.execute();
		assertEquals("do hw", result.name);
	}

	@Test
	void testFullNameSplit() {
		String name = "Juan Carlos Diaz";

		String fName = name.substring(0,name.lastIndexOf(" "));
		String lName = name.substring(name.lastIndexOf(" ")+1);

		assertEquals("Juan Carlos", fName);
		assertEquals("Diaz", lName);
	}

}
