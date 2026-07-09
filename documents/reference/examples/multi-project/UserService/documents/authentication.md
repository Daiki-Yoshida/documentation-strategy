# Authentication Implementation

## JWT Token Strategy

### Token Configuration
```csharp
public class JwtOptions
{
    public string SecretKey { get; set; }
    public string Issuer { get; set; }
    public string Audience { get; set; }
    public int AccessTokenExpireMinutes { get; set; } = 15;
    public int RefreshTokenExpireDays { get; set; } = 7;
}
```

### Token Generation
- Access tokens: 15-minute expiration
- Refresh tokens: 7-day expiration
- Claims: UserId, Email, Roles, Permissions
- Signing algorithm: HS256

### Authentication Flow
1. User submits credentials
2. Validate credentials against database
3. Generate JWT access token and refresh token
4. Store refresh token in database
5. Return tokens to client
6. Client includes access token in Authorization header

## Password Security

### Password Hashing
- Algorithm: BCrypt with salt rounds = 12
- Password requirements: 8+ characters, mixed case, numbers, symbols
- Password history: Store last 5 password hashes
- Account lockout: 5 failed attempts, 15-minute lockout

### Password Reset Flow
1. User requests password reset
2. Generate secure reset token (GUID)
3. Send reset link via email
4. Token expires after 1 hour
5. User submits new password with token
6. Validate token and update password

## Multi-Factor Authentication

### TOTP Implementation
- Google Authenticator compatible
- Secret key generation and QR code display
- Token validation with time tolerance
- Backup codes for recovery

### MFA Enrollment
```csharp
public class MfaSetupResponse
{
    public string SecretKey { get; set; }
    public string QrCodeUrl { get; set; }
    public string[] BackupCodes { get; set; }
}
```

## Security Headers

### Required Headers
```csharp
app.UseSecurityHeaders(options =>
{
    options.AddFrameOptionsDeny()
          .AddContentTypeOptionsNoSniff()
          .AddStrictTransportSecurity(365)
          .AddReferrerPolicyStrictOrigin()
          .AddContentSecurityPolicy("default-src 'self'");
});
```

## Rate Limiting

### Implementation
- 10 login attempts per minute per IP
- 100 API calls per minute per authenticated user
- Progressive delays for failed attempts
- Whitelist for internal services