# DNSSEC TA Tool

[![Build Status](https://api.travis-ci.org/kirei/dnssec_ta_tool.png)](https://travis-ci.org/kirei/dnssec_ta_tool)

This tool will extract DNSSEC Trust Anchors from a Trust Anchor XML file formatted as described in [RFC 7958](https://www.rfc-editor.org/rfc/rfc7958.txt). Validation of the detached signature over the Trust Anchor XML file IS NOT performed by this tool.

## Usage

    python3 dnssec_ta_tool.py --format dnskey --verbose
    python3 dnssec_ta_tool.py --format ds --output trust-anchor-file.conf
    python3 dnssec_ta_tool.py --format bind-managed --output managed-keys.bind
    python3 dnssec_ta_tool.py --format bind-trusted --output trusted-keys.bind

## Format Specification

- [RFC 7958](https://www.rfc-editor.org/rfc/rfc7958.txt)

## Root zone Trust Anchors

- https://www.iana.org/dnssec
- https://data.iana.org/root-anchors/root-anchors.xml

## Trust Anchor Validation

Before use, all trust anchors should be validated. Example code for how to do this using OpenSSL is available in `dnssec_ta_tool_wrapper.sh`.
