# Secure Model Portfolio Platform

Verification Code: WTC-4MV7WVF4

A cloud-hosted, security-hardened personal platform built for a working model who is also a developer. It serves two audiences at once — modeling agencies and clients visiting the public portfolio, and the owner managing content and documents privately behind authentication.

**Live site:** https://dvulspjxngs4s.cloudfront.net *(default AWS domain)*

## Overview

The public side is a professional portfolio showcasing shoots, contact information, and a booking form; hosted on AWS S3, served globally through CloudFront, and secured with HTTPS.

The private side sits behind authentication with multi-factor authentication required. High-resolution shoot images, contracts, agency documents, and rate cards are stored encrypted in the cloud. Role-based access controls what each type of user can see. A photographer can download their own images without seeing contracts, and an agent sees a different view than a client.

A security monitoring layer watches the platform, logging access attempts, flagging unusual login behaviour, and alerting on suspicious activity.

Deployment is fully automated: pushing to GitHub triggers a pipeline that ships the changes to AWS, with no manual uploads.

## Architecture

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python / Java (Lambda)
- **Hosting & CDN:** AWS S3, CloudFront
- **Domain & TLS:** Route 53, AWS Certificate Manager
- **Auth:** Amazon Cognito (with MFA, role-based user groups)
- **Storage:** S3 (encrypted), DynamoDB
- **Access control:** IAM, Origin Access Control (OAC)
- **Monitoring:** CloudTrail, CloudWatch Alarms, SNS
- **CI/CD:** GitHub Actions

## Status

| Component | Status |
|---|---|
| Public portfolio (S3 + CloudFront + HTTPS) | ✅ Live |
| Custom domain (Route 53 + ACM) | 🔲 Planned |
| Locked-down bucket access (OAC) | 🔲 In progress |
| Private authenticated area (Cognito + MFA) | 🔲 Planned |
| Contact/booking form (Lambda + SES) | 🔲 Planned |
| Security monitoring (CloudTrail + alarms) | 🔲 Planned |
| CI/CD pipeline (GitHub Actions) | 🔲 Planned |

## Why this project

This ties together cloud architecture and security engineering in one real, live product — not a tutorial exercise. It's built and deployed the same way a professional engineering team ships software, and it's genuinely in use as a working portfolio.