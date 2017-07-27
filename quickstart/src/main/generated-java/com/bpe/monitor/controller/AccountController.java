package com.bpe.monitor.controller;

import com.bpe.monitor.domain.Account;
import com.bpe.monitor.repository.AccountRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by polinchakb on 9/29/16.
 */
@RestController
public class AccountController {

	private static Logger logger = LoggerFactory.getLogger(AccountController.class);

	@Autowired
    private AccountRepository accountRepository;

	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public @ResponseBody Account signUp(@RequestBody Account account) throws Exception {
		Account result = accountRepository.save(account);
		return result;
	}

}
