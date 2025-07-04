//
// InlineResponse2006History.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct InlineResponse2006History: Codable {

    public var _open: Decimal?
    public var high: Decimal?
    public var low: Decimal?
    public var close: Decimal?
    public var date: Date?

    public init(_open: Decimal? = nil, high: Decimal? = nil, low: Decimal? = nil, close: Decimal? = nil, date: Date? = nil) {
        self._open = _open
        self.high = high
        self.low = low
        self.close = close
        self.date = date
    }

    public enum CodingKeys: String, CodingKey { 
        case _open = "open"
        case high
        case low
        case close
        case date
    }

}
