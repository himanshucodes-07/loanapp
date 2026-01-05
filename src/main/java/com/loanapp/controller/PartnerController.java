package com.loanapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("/partners")
public class PartnerController {

    private static final String BANKSATHI_URL = "https://www.banksathi.com";
    private static final String EARNKARO_URL = "https://www.earnkaro.com";
    private static final String CUELINKS_URL = "https://www.cuelinks.com";

    @GetMapping("/banksathi")
    public RedirectView redirectToBankSathi(@RequestParam(required = false) String offerId) {
        String url = BANKSATHI_URL;
        if (offerId != null && !offerId.isEmpty()) {
            url += "?ref=loanhub&offerId=" + offerId;
        }
        return new RedirectView(url);
    }

    @GetMapping("/earnkaro")
    public RedirectView redirectToEarnKaro(@RequestParam(required = false) String offerId) {
        String url = EARNKARO_URL;
        if (offerId != null && !offerId.isEmpty()) {
            url += "?ref=loanhub&offerId=" + offerId;
        }
        return new RedirectView(url);
    }

    @GetMapping("/cuelinks")
    public RedirectView redirectToCuelinks(@RequestParam(required = false) String offerId) {
        String url = CUELINKS_URL;
        if (offerId != null && !offerId.isEmpty()) {
            url += "?ref=loanhub&offerId=" + offerId;
        }
        return new RedirectView(url);
    }
}
