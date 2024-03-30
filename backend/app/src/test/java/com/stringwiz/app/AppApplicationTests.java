package com.stringwiz.app;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.*;

@SpringBootTest
class AppApplicationTests {


		private Map<String, Integer> map;



		public AppApplicationTests() {

			map = new HashMap<>();

			map.put("foo", 1);

			map.put("bar", 3);

		}



		public int getValue(String input, int numRetries) throws Exception {

			try {

				return map.get(input);

			}

			catch (Exception e) {

				if (numRetries > 3) {
					System.out.println(numRetries);

					throw e;

				}

				return getValue(input, numRetries + 1);

			}

		}

	@Test
	void contextLoads() throws Exception {
		System.out.println(getValue("foo", 0));
		System.out.println(getValue("bar", 2));
		System.out.println(getValue("baz", 0));
		System.out.println(getValue("fubar", 1));
//		getValue("foo", 0);
//
//		getValue("bar", 2);
//
//		getValue("baz", 0);
//
//		getValue("fubar", 1);
	}

}
