//
//  WidgetUserAgent.swift
//  keyri-pod
//
//  Created by Aditya Malladi on 5/25/22.
//

import Foundation

public class WidgetUserAgent: NSObject, Codable {
    @objc public var os: String
    @objc public var browser: String
}
