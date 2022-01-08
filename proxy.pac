// https://findproxyforurl.com/pac-functions/

function FindProxyForURL(url, host) {
	debug(url, host);
	
	// TODO: deploy to real host
	PROXY = "PROXY 192.168.0.105:8080";

	if (shExpMatch(host, "*notion*")) {
		return PROXY;
	}

	return "DIRECT";
}

function debug(url, host) {
	debugPAC ="PAC Debug Information\n";
	debugPAC +="-----------------------------------\n";
	debugPAC +="Machine IP: " + myIpAddress() + "\n";
	debugPAC +="Hostname: " + host + "\n";
	if (isResolvable(host)) {resolvableHost = "True"} else {resolvableHost = "False"};
	debugPAC +="Host Resolvable: " + resolvableHost + "\n";
	debugPAC +="Hostname IP: " + dnsResolve(host) + "\n";
	if (isPlainHostName(host)) {plainHost = "True"} else {plainHost = "False"};
	debugPAC +="Plain Hostname: " + plainHost + "\n";
	debugPAC +="Domain Levels: " + dnsDomainLevels(host) + "\n";
	debugPAC +="URL: " + url + "\n";

	// Protocol can only be determined by reading the entire URL.
	if (url.substring(0,5)=="http:") {protocol="HTTP";} else
		if (url.substring(0,6)=="https:") {protocol="HTTPS";} else
			if (url.substring(0,4)=="ftp:") {protocol="FTP";}
				else {protocol="Unknown";}
	debugPAC +="Protocol: " + protocol + "\n";

	// Reduce volume of alerts to a useable level, e.g. only alert on static text pages.
	if (!shExpMatch(url,"*.(js|xml|ico|gif|png|jpg|jpeg|css|swf)*")) {alert(debugPAC);}
}
