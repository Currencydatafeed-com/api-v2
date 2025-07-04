//
// InlineResponse20018.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct InlineResponse20018: Codable {

    public var success: Bool?
    public var data: [InlineResponse20018Data]?
    public var errorCode: String?
    public var message: String?

    public init(success: Bool? = nil, data: [InlineResponse20018Data]? = nil, errorCode: String? = nil, message: String? = nil) {
        self.success = success
        self.data = data
        self.errorCode = errorCode
        self.message = message
    }

    public enum CodingKeys: String, CodingKey { 
        case success
        case data
        case errorCode = "error_code"
        case message
    }

}
